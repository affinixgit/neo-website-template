import config from "@/config/config";
/**
 * Fetches the background image for a given module based on its slug.
 * 
 * @param {string} imageSlug - The slug of the module for which to fetch the background image.
 * @returns {Promise<string>} A promise that resolves to the URL of the background image.
 */
export async function fetchBackgroundImage(imageSlug = 'blog') {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", config.subscriptionId);
  
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
  
    const response = await fetch(
      `${config.apiBaseUrl}/website/nav/${imageSlug}`,
      requestOptions
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch ${imageSlug} background image`);
    }
    let navData = await response.json();
    return navData;
  }