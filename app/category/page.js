import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/images/banner/banner3.jpg"; // Update image import
import { getCategories } from "@/lib/category";
import { categories } from "@/lib/dummydata";

export default async function CategoriesPage() {

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const response = await fetch("http://localhost:3006/api/v1/categories?pageNumber=1&pageSize=5", requestOptions);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const categoryResponse = await response.json();

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
                        <div className="row">
                            {categoryResponse.categories.map((category) => (
                                <div className="col-lg-4 col-md-6" key={category.idCategory}>
                                    <div className="category-card">
                                        <Link href={`/category/${category.slug}`}>
                                            <h3 className="card-title">{category.categoryTitle}</h3>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
