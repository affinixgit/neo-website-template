import Slider1 from "@/components/carousal/slider";
import ServiceSlider from "@/components/service/serviceSlider";
import CallToAction from "@/components/Home/CallToAction";
import FeaturedServices from "@/components/service/featuredServices";
import HeroSection from "@/components/Hero/heroSection";
import Testimonials from "@/components/Testimonials";
import HomeAboutUs from "@/components/AboutUs/home-about-us";
import HomeBlogSection from "@/components/Blogs/homeBlogs";
import { blogPosts } from "@/lib/dummydata";


export default async function Home() {


  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch("http://localhost:3006/api/v1/service?pageNumber=1&pageSize=5", requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  const productResponse = await response.json();

  const websiteResponse = await fetch("http://localhost:3006/api/v1/website", requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch website Data');
  }
  const websiteData = await websiteResponse.json();

  console.log(websiteData)


  return (
    <>

      <div className="page-content bg-white">
        {websiteData.slider.length > 1 ? <Slider1 data={websiteData}></Slider1> : null}
        <HomeAboutUs></HomeAboutUs>
        <HeroSection></HeroSection>
        <FeaturedServices services={productResponse.service} />
        <Testimonials></Testimonials>
        <HomeBlogSection posts={blogPosts} ></HomeBlogSection>
        <CallToAction></CallToAction>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteData.jsonLd }}
        />
      </div>
    </>
  );
}
