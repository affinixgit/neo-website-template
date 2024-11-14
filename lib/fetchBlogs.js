// lib/fetchBlogs.js
export async function fetchBlogs(pageNumber = 1, pageSize = 12) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    const response = await fetch(
      `${process.env.API_URL}/api/v1/blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    return response.json();
  }
  
  // lib/fetchBlogs.js
export async function fetchFeatureBlogs(pageNumber = 1, pageSize = 6) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const response = await fetch(
    `${process.env.API_URL}/api/v1/blogs/featured?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return response.json();
}
