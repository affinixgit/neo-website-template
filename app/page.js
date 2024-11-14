import Slider1 from "@/components/carousal/slider";
import ServiceSlider from "@/components/service/serviceSlider";
import CallToAction from "@/components/Home/CallToAction";
import FeaturedServices from "@/components/service/featuredServices";
import HeroSection from "@/components/Hero/heroSection";
import Testimonials from "@/components/Testimonials";
import HomeAboutUs from "@/components/AboutUs/home-about-us";
import HomeBlogSection from "@/components/Blogs/homeBlogs";
import SliderItem from "@/components/carousal/sliderItem";
// import { fetchFeatureBlogs } from "@/lib/fetchBlogs";


export default async function Home() {


  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service?pageNumber=1&pageSize=5`, requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  const productResponse = await response.json();

  const websiteResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/website`, requestOptions);
  if (!response.ok) {
    throw new Error('Failed to fetch website Data');
  }
  const commonData = await websiteResponse.json();
  sessionStorage.setItem('nbi', JSON.stringify(commonData.businessInfo));

  const featuredBlogsResponse = await fetchFeatureBlogs();



  return (
    <>

      <div className="page-content bg-white">
        {commonData.slider.length > 1 ? <Slider1 data={commonData}></Slider1> : <SliderItem key={0} item={{
          image: commonData.slider[0].sliderImage.mediaBaseUrl + '/' + commonData.slider[0].sliderImage.fileSlug,
          alt: commonData.slider[0].websiteData.title,
          title: commonData.slider[0].websiteData.title,
          description: commonData.slider[0].websiteData.description,
          catButtonTitle: commonData.slider[0].websiteData.catButtonTitle,
          catLink: commonData.slider[0].websiteData.catLink,
        }}></SliderItem>}
        <HomeAboutUs aboutUs={commonData.aboutUs.websiteData}></HomeAboutUs>
        <HeroSection data={commonData.hero.websiteData} heroImage={commonData.hero.heroImage}></HeroSection>
        <FeaturedServices services={productResponse.service} />
        <Testimonials></Testimonials>
        <HomeBlogSection posts={featuredBlogsResponse.blogs} ></HomeBlogSection>
        <CallToAction></CallToAction>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: commonData.jsonLd }}
        />
      </div>
    </>
  );
}
