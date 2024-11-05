import Slider1 from "@/components/carousal/slider";
import ProductSlider from "@/components/product/product-slider"

export default async function Home() {


  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch("http://localhost:3006/api/v1/products?pageNumber=1&pageSize=5", requestOptions);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const productResponse = await response.json();
  

  return (
    <>
      <div className="page-content bg-white">
        <Slider1></Slider1>
        <div className="section-area section-sp5">
          <div className="container-fluid">
           <ProductSlider  products={productResponse.products} />              
          </div>
        </div>
      </div>
    </>
  );
}
