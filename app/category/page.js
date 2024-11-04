
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { getCategories } from "@/lib/category";
import { categories } from "@/lib/dummydata";



export default async function CategoriesPage() {

    const productItem = await getCategories();

    return (
        <div className="page-content">
            <div
                className="page-banner ovbl-dark"
                style={{ backgroundImage: `url(${bannerImg.src})` }} // Using imported image
            >
                <div className="container">
                    <div className="page-banner-entry">
                        <h1 className="text-white">Product Categories</h1>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Product Categories</li>
                    </ul>
                </div>
            </div>

            <div className="content-block">
                <div className="section-area section-sp5">
                    <div className="container">
                        <div className="category-tags" >
                            {categories
                                .map((category, idx, arr) => (

                                    <span key={category.idCategory}>
                                        <Link href={`/category/${category.slug}`} className="category-link">
                                            {category.categoryTitle}
                                        </Link>
                                    </span>

                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



