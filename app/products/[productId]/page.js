import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getProductItem } from '@/lib/product';

export default async function ProductDetailPage({ params }) {
    const { productId } = await params
    const productItem = await getProductItem(productId)

    if (!productItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <img src={productItem.eventImage} alt={productItem.eventTitle} />
                <h1>{productItem.eventTitle}</h1>
            </header>
            <p>{productItem.description}</p>
        </article>
    );
}
