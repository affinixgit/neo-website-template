// lib/fetchBlogs.js
export async function fetchBlogs(pageNumber = 1, pageSize = 12) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    const response = await fetch(
      `http://localhost:3006/api/v1/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    return response.json();
  }
  