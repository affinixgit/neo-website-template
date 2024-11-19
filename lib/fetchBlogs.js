// lib/fetchBlogs.js
import config from "@/config/config";

export async function fetchBlogs(pageNumber = 1, pageSize = 12) {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    requestOptions
  );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    return response.json();
  }
  
