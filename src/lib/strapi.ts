
import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337/api";

// Helper function to handle API requests with error handling
async function fetchAPI(endpoint: string, params = "") {
  try {
    const url = `${API_URL}/${endpoint}${params ? params : ""}`;
    const res = await axios.get(url, { timeout: 5000 }); // 5 second timeout
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
  try {
    const data = await fetchAPI(`services`, `?populate=deep`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching services:`, error);
    return [];
  }
}

export async function fetchBlogPosts() {
  try {
    const data = await fetchAPI(`blog-posts`, `?populate=deep`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching blog posts:`, error);
    return [];
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    const data = await fetchAPI(`blog-posts`, `?filters[slug][$eq]=${slug}&populate=deep`);
    return data.data[0];
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    throw error;
  }
}

export async function fetchFaqs() {
  try {
    const data = await fetchAPI(`faqs`, `?populate=deep&sort=order:asc`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching FAQs:`, error);
    return [];
  }
}

export async function fetchAppointmentPageContent() {
  try {
    const data = await fetchAPI(`appointment-page`, `?populate=deep`);
    return data.data;
  } catch (error) {
    console.error(`Error fetching appointment page content:`, error);
    return null;
  }
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
  try {
    const data = await fetchAPI(`courses`, `?filters[slug][$eq]=${slug}&populate=deep`);
    return data.data[0];
  } catch (error) {
    console.error(`Error fetching course ${slug}:`, error);
    throw error;
  }
}

// Google Sheets integration for pricing
export async function fetchGoogleSheetPrices() {
  try {
    // Google Sheets published to the web as CSV
    const sheetId = "1QD_ZgaC5-pDjTpryvlW-AmOoQXbjI8SLl9heWnx3rwU";
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
    
    const response = await axios.get(sheetUrl, { timeout: 5000 });
    return processSheetData(response.data);
  } catch (error) {
    console.error("Error fetching Google Sheet prices:", error);
    return null;
  }
}

// Process CSV data from Google Sheets
function processSheetData(csvData: string) {
  try {
    // Simple CSV parsing (could use a more robust library in production)
    const rows = csvData.split('\n');
    const headers = parseCSVRow(rows[0]);
    
    const result: Record<string, any[]> = {
      iphone: [],
      ipad: [],
      mac: [],
      watch: []
    };
    
    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].trim()) continue;
      
      const rowData = parseCSVRow(rows[i]);
      const device = rowData[0]?.toLowerCase() || 'other';
      
      if (device && result[device]) {
        result[device].push({
          model: rowData[1] || '',
          repairType: rowData[2] || '',
          pixPrice: rowData[3] || '',
          cashPrice: rowData[4] || '',
          installments2to5: rowData[5] || '',
          installments6to10: rowData[6] || ''
        });
      }
    }
    
    return result;
  } catch (error) {
    console.error("Error processing sheet data:", error);
    return null;
  }
}

// Parse a CSV row handling quoted values
function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let inQuote = false;
  let currentValue = '';
  
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    
    if (char === '"') {
      inQuote = !inQuote;
    } else if (char === ',' && !inQuote) {
      result.push(currentValue);
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  
  result.push(currentValue); // Add the last value
  return result;
}
