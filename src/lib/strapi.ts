import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

// Helper function to handle API requests with error handling
async function fetchAPI(endpoint: string, params = "") {
  try {
    const url = `${API_URL}/${endpoint}${params ? params : ""}`;
    const res = await axios.get(url, { timeout: 5000 }); // 5 segundo timeout
    return res.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

// Check if Strapi is available
export async function checkStrapiConnection() {
  try {
    await axios.get(`${API_URL}`, { timeout: 3000 });
    return true;
  } catch (error) {
    console.warn("Strapi connection failed:", error);
    return false;
  }
}

export async function fetchPage(slug: string) {
  try {
    const data = await fetchAPI(`pages`, `?filters[slug][$eq]=${slug}&populate=deep`);
    return data.data[0];
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    throw error;
  }
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

// Blog administration functions
export async function createBlogPost(data: any, token: string) {
  try {
    const url = `${API_URL}/blog-posts`;
    const res = await axios.post(url, { data }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

export async function updateBlogPost(id: number, data: any, token: string) {
  try {
    const url = `${API_URL}/blog-posts/${id}`;
    const res = await axios.put(url, { data }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error(`Error updating blog post ${id}:`, error);
    throw error;
  }
}

export async function deleteBlogPost(id: number, token: string) {
  try {
    const url = `${API_URL}/blog-posts/${id}`;
    const res = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    console.error(`Error deleting blog post ${id}:`, error);
    throw error;
  }
}

export async function uploadMedia(file: File, token: string) {
  try {
    const formData = new FormData();
    formData.append('files', file);
    
    const url = `${API_URL}/upload`;
    const res = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  } catch (error) {
    console.error('Error uploading media:', error);
    throw error;
  }
}

// Course content functions
export async function fetchCourse(slug: string) {
  const data = await fetchAPI(`courses`, `?filters[slug][$eq]=${slug}&populate=deep`);
  return data.data[0];
}
