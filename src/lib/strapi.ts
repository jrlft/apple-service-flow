
import axios from "axios";

const API_URL = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337/api";

// Helper function to handle API requests with error handling
async function fetchAPI(endpoint: string, params = "") {
  try {
    const url = `${API_URL}/${endpoint}${params ? params : ""}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export async function fetchPage(slug: string) {
  const data = await fetchAPI(`pages`, `?filters[slug][$eq]=${slug}&populate=deep`);
  return data.data[0];
}

export async function fetchServices() {
  const data = await fetchAPI(`services`, `?populate=deep`);
  return data.data;
}

export async function fetchBlogPosts() {
  const data = await fetchAPI(`blog-posts`, `?populate=deep`);
  return data.data;
}

export async function fetchBlogPost(slug: string) {
  const data = await fetchAPI(`blog-posts`, `?filters[slug][$eq]=${slug}&populate=deep`);
  return data.data[0];
}

export async function fetchCourse(slug: string) {
  const data = await fetchAPI(`courses`, `?filters[slug][$eq]=${slug}&populate=deep`);
  return data.data[0];
}

export async function fetchFaqs() {
  const data = await fetchAPI(`faqs`, `?populate=deep&sort=order:asc`);
  return data.data;
}

export async function fetchAppointmentPageContent() {
  const data = await fetchAPI(`appointment-page`, `?populate=deep`);
  return data.data;
}

// For SEO data
export async function fetchMetadata(page: string) {
  try {
    const data = await fetchAPI(`metadata`, `?filters[page][$eq]=${page}`);
    return data.data[0]?.attributes;
  } catch (error) {
    console.error(`Error fetching metadata for ${page}:`, error);
    return null;
  }
}
