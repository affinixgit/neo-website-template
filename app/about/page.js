import AboutUs from "@/components/AboutUs/aboutUs";
import config from "@/config/config";

export async function generateMetadata() {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  try {
    const response = await fetch(`${config.apiBaseUrl}/about`, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch metadata for about page");
    }

    const aboutData = await response.json();

    return {
      title: aboutData.metaTitle || "About Us",
      description: aboutData.metaDescription || "About Us page.",
      openGraph: {
        title: aboutData.metaTitle || "About Us",
        description: aboutData.metaDescription || "Default description for About Us page.",
        images: [
          {
            url: aboutData.mediaBaseUrl ? `${aboutData.mediaBaseUrl}/${aboutData.fileSlug}` : "/default-image.jpg",
            alt: aboutData.metaTitle || "About Us",
          },
        ],
        url: config.siteBaseUrl + "/about",
      },
      alternates: {
        canonical: config.siteBaseUrl + "/about",
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
  
  }
}

export default async function About() {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  try {
    const response = await fetch(`${config.apiBaseUrl}/about`, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch about us details");
    }

    const aboutData = await response.json();

    return <AboutUs aboutData={aboutData} />;
  } catch (error) {
    console.error("Error fetching about us details:", error);
    return <p>Failed to load about us details.</p>;
  }
}
