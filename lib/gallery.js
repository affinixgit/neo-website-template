import config from "@/config/config";

export async function fetchGallery(pageNumber = 1, pageSize = 12) {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/gallery?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Failed to galleries");
  }

  return response.json();
}
