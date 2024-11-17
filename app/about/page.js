import AboutUs from "@/components/AboutUs/aboutUs";

export default async function About() {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about`, requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
const aboutData =await response.json();
  if (!aboutData) {
    return <p>Failed to load about us details.</p>;
  }

  return <AboutUs aboutData={aboutData} />;
};

