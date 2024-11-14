import AboutUs from "@/components/AboutUs/aboutUs";

export default async function About() {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch("http://localhost:3006/api/v1/about", requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
const aboutData =await response.json();
  if (!aboutData) {
    return <p>Failed to load about us details.</p>;
  }

  return <AboutUs aboutData={aboutData} />;
};

