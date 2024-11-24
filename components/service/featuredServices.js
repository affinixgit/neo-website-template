
import Link from "next/link";
import { trimText, getText } from "@/lib/common";


function FeaturedServices({ services }) {

    return (
        <section className="featured-products">
            <div className="col-md-12 heading-bx left">
                <h2 className="title-head">Featured Services</h2>
            </div>


            <div className="grid">
                {services.map((item) => (
                    <div key={item.idServices} className="product-card">
                        <img
                            src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                            alt={item?.serviceTitle} className="product-image" />
                        <div className="image-divider"></div> {/* Divider under image */}
                        <h3 className="product-name">
                            <Link href={`/services/${item?.slug}`} className="button">
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



