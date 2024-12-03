import config from "@/config/config";
export async function fetchBackgroundImage() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", config.subscriptionId);
  
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
  
    const response = await fetch(
      `${config.apiBaseUrl}/website/nav/blog`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch blogs background image');
    }
    let blogs = await response.json();
    return blogs.backgroundImage;
  }