// lib/fetchBlogs.js
import config from "@/config/config";

export async function fetchBlogs(pageNumber = 1, pageSize = 12) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    const response = await fetch(
      `${config.apiBaseUrl}/api/v1/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    return response.json();
  }
  
