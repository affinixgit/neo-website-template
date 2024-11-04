import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HTMLReactParser from "html-react-parser";
import { getProductsByCategory } from '@/lib/product';
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import

export default async function ProductCategoriesPage({ params }) {
    const { slug } = await params;
    const productList = await getProductsByCategory(slug);


    if (!productList) {
        notFound();
    }

    function trimText(text) {
        if (text && text.length > 200) {
            return text.substring(0, 200) + "...";
        }
        return text;
    }

    function getText(text) {
        return text?.replace(/<[^>]+>/g, "") || "";
    }

    return (
        <div className="page-content">
            <div
                className="page-banner ovbl-dark"
                style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
            >
                <div className="container">
                    <div className="page-banner-entry">
                        <h1 className="text-white">Our Category</h1>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Our Products</li>
                    </ul>
                </div>
            </div>

            <div className="content-block">
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    {productList.map((item, idx) =>
                                        <div className="col-md-6 col-lg-4 col-sm-6 m-b30" key={idx}>
                                            <div className="cours-bx">
                                                <div className="action-box course-imgbox">
                                                    <Image
                                                        className="img-fluid"
                                                        width={450}
                                                        height={300}
                                                        src={`${item?.media.mediaBaseUrl}/${item?.media.fileSlug}`}
                                                        alt={item?.productTitle}
                                                    />
                                                    <Link href={`/products/${item?.slug}`} className="btn">
                                                        Read More
                                                    </Link>
                                                </div>
                                                <div className="info-bx">
                                                    <h6>
                                                        <Link href={`/products/${item?.slug}`}>
                                                            {item?.productTitle}
                                                        </Link>
                                                    </h6>
                                                    <span>{trimText(getText(item?.description))}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};



