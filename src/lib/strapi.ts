import axios from "axios";

const API_URL = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337/api";

export async function fetchPage(slug: string) {
  const res = await axios.get(`${API_URL}/pages?filters[slug][$eq]=${slug}&populate=deep`);
  return res.data.data[0];
}

export async function fetchServices() {
  const res = await axios.get(`${API_URL}/services?populate=deep`);
  return res.data.data;
}

export async function fetchBlogPosts() {
  const res = await axios.get(`${API_URL}/blog-posts?populate=deep`);
  return res.data.data;
}

export async function fetchBlogPost(slug: string) {
  const res = await axios.get(`${API_URL}/blog-posts?filters[slug][$eq]=${slug}&populate=deep`);
  return res.data.data[0];
}

export async function fetchCourse(slug: string) {
  const res = await axios.get(`${API_URL}/courses?filters[slug][$eq]=${slug}&populate=deep`);
  return res.data.data[0];
}
