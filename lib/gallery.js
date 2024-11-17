export async function fetchGallery(pageNumber = 1, pageSize = 12) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/gallery?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
  
    return response.json();
  }