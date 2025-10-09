const DEFAULT_TIMEOUT_MS = 10000;
const DEFAULT_RETRIES = 2;

export const STRAPI_BASE_URL = (
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://strapi.kwebmaker.co.in"
).replace(/\/$/, "");

function buildUrl(pathOrUrl, params) {
  const isAbsolute = /^https?:\/\//i.test(pathOrUrl);
  const normalizedPath = isAbsolute
    ? pathOrUrl
    : `${STRAPI_BASE_URL}${
        pathOrUrl.startsWith("/api")
          ? pathOrUrl
          : `/api/${pathOrUrl.replace(/^\//, "")}`
      }`;

  if (!params || Object.keys(params).length === 0) return normalizedPath;
  const url = new URL(normalizedPath);
  const search = new URLSearchParams(url.search);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => search.append(key, String(v)));
    } else {
      search.set(key, String(value));
    }
  }
  url.search = search.toString();
  return url.toString();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(resource, options, timeoutMs) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(id);
  }
}

function isRetriableStatus(status) {
  return status >= 500 || status === 408 || status === 429;
}

function parseStrapiErrorPayload(body) {
  // Strapi v4 typically: { error: { status, name, message, details } }
  if (body && body.error) {
    const err = body.error;
    const message = err?.message || "Unknown Strapi error";
    const status = err?.status || 500;
    return { status, message };
  }
  return null;
}

/**
 * Core Strapi request helper with retries, timeout, and Next.js cache controls.
 *
 * @param {string} path - e.g. "/api/home" or "home" ("/api/" will be auto-prefixed)
 * @param {Object} options
 *  - method: HTTP method (default: GET)
 *  - params: object to be serialized to query string
 *  - headers: additional headers
 *  - body: object or string. If object, will be JSON.stringified
 *  - timeoutMs: request timeout (default 10s)
 *  - retries: number of retry attempts on retriable errors (default 2)
 *  - backoffMs: base backoff in ms (default 300)
 *  - populateAll: when true, adds populate=* unless already provided in params
 *  - revalidate: Next.js ISR seconds; ignored when cache === 'no-store'
 *  - cache: set to 'no-store' for getServerSideProps-like behavior
 */
export async function requestStrapi(
  path,
  {
    method = "GET",
    params,
    headers,
    body,
    timeoutMs = DEFAULT_TIMEOUT_MS,
    retries = DEFAULT_RETRIES,
    backoffMs = 300,
    populateAll = false,
    revalidate = 60,
    cache,
  } = {}
) {
  const combinedHeaders = {
    "Content-Type": "application/json",
    ...(process.env.STRAPI_API_TOKEN
      ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
      : {}),
    ...headers,
  };

  const finalParams = { ...(params || {}) };
  if (populateAll && finalParams.populate === undefined) {
    finalParams.populate = "*";
  }

  const url = buildUrl(path, finalParams);

  const nextOptions = {};
  if (cache) nextOptions.cache = cache; // 'no-store' or 'force-cache'
  if (!cache && typeof revalidate === "number")
    nextOptions.next = { revalidate };

  const requestInit = {
    method,
    headers: combinedHeaders,
    body: body && typeof body === "object" ? JSON.stringify(body) : body,
    ...nextOptions,
  };

  let attempt = 0;
  let lastError;
  while (attempt <= retries) {
    try {
      const res = await fetchWithTimeout(url, requestInit, timeoutMs);

      if (!res.ok) {
        let payload = null;
        try {
          payload = await res.json();
        } catch (_) {
          // ignore JSON parse error for non-JSON responses
        }
        const parsed = parseStrapiErrorPayload(payload);
        const message = parsed?.message || res.statusText || "Request failed";
        const status = parsed?.status || res.status;

        if (isRetriableStatus(status) && attempt < retries) {
          attempt += 1;
          await sleep(backoffMs * Math.pow(2, attempt - 1));
          continue;
        }

        const error = new Error(message);
        error.status = status;
        error.payload = payload;
        throw error;
      }

      // success
      const json = await res.json();
      if (json && json.error) {
        const parsed = parseStrapiErrorPayload(json);
        const error = new Error(
          parsed?.message || "Strapi responded with error"
        );
        error.status = parsed?.status || 500;
        error.payload = json;
        throw error;
      }
      return {
        data: json?.data ?? null,
        meta: json?.meta ?? null,
        status: res.status,
      };
    } catch (err) {
      lastError = err;
      const isAbort = err?.name === "AbortError";
      if (
        (isAbort ||
          err?.status === undefined ||
          isRetriableStatus(err.status)) &&
        attempt < retries
      ) {
        attempt += 1;
        await sleep(backoffMs * Math.pow(2, attempt - 1));
        continue;
      }
      throw err;
    }
  }
  throw lastError || new Error("Unknown request error");
}

/**
 * Back-compat thin helper returning only data array/object.
 * Example: await fetchAPI('home', { params: { populate: '*' } })
 */
export async function fetchAPI(endpoint, options) {
  const result = await requestStrapi(endpoint, options);
  return result?.data ?? null;
}

/**
 * Resolve a Strapi relative media path to absolute URL.
 * Example: makeMediaUrl('/uploads/image.png')
 */
export function makeMediaUrl(relativePath) {
  if (!relativePath) return relativePath;
  if (/^https?:\/\//i.test(relativePath)) return relativePath;
  return `${STRAPI_BASE_URL}${
    relativePath.startsWith("/") ? relativePath : `/${relativePath}`
  }`;
}
