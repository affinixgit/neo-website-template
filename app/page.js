import Slider1 from "@/components/carousal/slider";
import ServiceSlider from "@/components/service/serviceSlider";
import CallToAction from "@/components/Home/CallToAction";


 function FeaturedProducts() {
  const products = [
    {
      "id": 1,
      "name": "Product 1",
      "description": "This is a great product.",
      "price": 49.99,
      "image": "/images/product1.jpg"
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "This is another amazing product.",
      "price": 69.99,
      "image": "/images/product2.jpg"
    },
    {
      "id": 3,
      "name": "Product 3",
      "description": "A must-have product.",
      "price": 89.99,
      "image": "/images/product3.jpg"
    },
    {
      "id": 4,
      "name": "Product 4",
      "description": "Top-rated product.",
      "price": 99.99,
      "image": "/images/product4.jpg"
    },
    {
      "id": 5,
      "name": "Product 5",
      "description": "Limited edition product.",
      "price": 129.99,
      "image": "/images/product5.jpg"
    },
    {
      "id": 6,
      "name": "Product 6",
      "description": "Highly recommended product.",
      "price": 59.99,
      "image": "/images/product6.jpg"
    }
  ];  
  const featuredProducts = products.slice(0, 6); // Static product list, no need for useState

  return (
    <section className="featured-products">
      <h2 className="section-title">Featured Products</h2>
      <div className="grid">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src="https://tbs-website-live.s3.ap-south-1.amazonaws.com/a990fb30-7621-4cea-926a-b5ad5d6ea5ef/website/image/mastering-social-media-strategies:-accelerating-brand-growth" alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


 


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

        <FeaturedProducts />
       <CallToAction></CallToAction>
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
