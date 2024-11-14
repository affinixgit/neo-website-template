import Link from 'next/link';
import ServiceDescription from '@/components/service/serviceDescription';



export async function generateMetadata({params}) {
  

    const { productSlug } = await params;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/Service/${productSlug}`, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch product ${productSlug}`);
    }
    
    const serviceItem = await response.json();
   
   // Extract metadata from the serviceItem
   return {
    title: serviceItem.metadata.title,
    description: serviceItem.metadata.description,
    keywords: serviceItem.metadata.keywords,
    alternates: {
        canonical: serviceItem.metadata.canonical,
    },
    openGraph: {
        title: serviceItem.metadata.openGraph.title,
        description: serviceItem.metadata.openGraph.description,
        url: serviceItem.metadata.openGraph.url,
        images: serviceItem.metadata.openGraph.images.map(image => ({
            url: image.url,
            alt: image.alt,
        })),
    },
    twitter: {
        card: serviceItem.metadata.twitterCard.card,
        title: serviceItem.metadata.twitterCard.title,
        description: serviceItem.metadata.twitterCard.description,
        images: serviceItem.metadata.twitterCard.images,
    },
};
}

export default async function ServiceDetailPage({ params }) {
    const { productSlug } = await params;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/Service/${productSlug}`, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch product ${productSlug}`);
    }
    const serviceItem = await response.json();
    const bannerImg = "/images/banner/banner2.jpg";
    const jsonLd = serviceItem.jsonLd ? serviceItem.jsonLd : '{}'; // Safeguard against undefined


    return (
        <>
            <div className="page-content">
                {/* Banner Section */}
                <div
                    className="page-banner ovbl-dark"
                    style={{ backgroundImage: `url(${bannerImg})` }}
                >
                    <div className="container">
                        <div className="page-banner-entry">
                            <h1 className="text-white">{serviceItem.serviceTitle}</h1>
                        </div>
                    </div>
                </div>

                {/* Breadcrumbs */}
                <div className="breadcrumb-row">
                    <div className="container">
                        <ul className="list-inline">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>{serviceItem.serviceTitle}</li>
                        </ul>
                    </div>
                </div>

                <ServiceDescription serviceItem={serviceItem}></ServiceDescription>

                <div className="content-block">
                    <div className="section-area section-sp5">
                        <div className="container">
                            <div className="row d-flex flex-row">
                                <h4>Filter Services</h4>
                                <div className="product-tags" >
                                    {serviceItem.tags
                                        .map((tag, tagIdx, arr) => (
                                            <span key={tagIdx}>
                                                <Link href={`/tags/${tag.slug}/${serviceItem.slug}`} className="tag-link">
                                                    {tag.tagName}
                                                </Link>
                                                {tagIdx < arr.length - 1 && " | "}
                                            </span>
                                        ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/* JSON-LD Script Tag */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

            </div>
        </>
    );
}
