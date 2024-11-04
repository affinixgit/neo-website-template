import Slider1 from "@/components/carousal/slider";
import ProductSlider from "@/components/product/product-slider"
import { productList } from "@/lib/dummydata";

export default function Home() {

  

  return (
    <>
      <div className="page-content bg-white">
        <Slider1></Slider1>
        <div className="section-area section-sp1">
          <div className="container-fluid">
           <ProductSlider  products={productList} />              
          </div>
        </div>
      </div>
    </>
  );
}
