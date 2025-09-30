// /lib/api.js
export async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}`, {
      next: { revalidate: 60 }, // ISR caching for fast production
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch ${endpoint}:`, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error(`Network error fetching ${endpoint}:`, err);
    return [];
  }
}
