import Slider1 from "@/components/carousal/slider";
import ServiceSlider from "@/components/service/serviceSlider";
import Head from "next/head";




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



  
  return (
    <>
    
      <div className="page-content bg-white">
        <Slider1></Slider1>
        <div className="section-area section-sp5">
          <div className="container-fluid">
           <ServiceSlider  products={productResponse.service} />              
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteData.jsonLd}}
        />
      </div>
    </>
  );
}
