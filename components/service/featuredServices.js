
import Link from "next/link";
import { trimText, getText } from "@/lib/common";


function FeaturedServices({ services }) {

    return (
        <section className="featured-products">
            <div className="text-center mb-5">
                <h3 className="fw-bold display-5">Featured Services</h3>
            </div>


            <div className="grid">
                {services.map((item) => (
                    <div key={item.idServices} className="product-card">
                        <img
                            src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                            alt={item?.altText} className="product-image" style={{width: '300px', height: '200px'}} />
                        <div className="image-divider"></div> {/* Divider under image */}
                        <h3 className="product-name">
                            <Link href={`${item?.slug}`} className="button">
                                {item?.serviceTitle}
                            </Link>
                        </h3>
                        <p className="product-description">{trimText(getText(item?.description))}</p>
                    </div>
                ))}
            </div>
        </section >
    );
}

export default FeaturedServices;



