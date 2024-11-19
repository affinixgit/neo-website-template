import config from "@/config/config";

export async function fetchBusinessContact() {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(
    `${config.apiBaseUrl}/website/businessInfo`,
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}
