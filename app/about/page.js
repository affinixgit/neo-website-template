import AboutUs from "@/components/AboutUs/aboutUs";
import config from "@/config/config";

export default async function About() {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const response = await fetch(`${config.apiBaseUrl}/about`, requestOptions);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  const aboutData = await response.json();
  if (!aboutData) {
    return <p>Failed to load about us details.</p>;
  }

  return <AboutUs aboutData={aboutData} />;
};

