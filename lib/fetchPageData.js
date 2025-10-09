import { createData, fetchData } from "./client_api";

export const fetchPageData = async (endpoint) => {
  try {
    const data = await fetchData(endpoint);
    return data || null;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
};

export const postPageData = async (endpoint, payload) => {
  try {
    const response = await createData(endpoint, payload);
    return response || {};
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    return { success: false, error: process.env.NODE_ENV === "development" ? error.message : "Failed to submit data" };
  }
};
