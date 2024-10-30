import { events } from "./dummydata";

export async function getProductItem(productId) {
    const productItem = events.find(event => event.productId === parseInt(productId, 10));
    if (!productItem) {
        throw new Error(`Product with ID ${productId} not found.`);
    }
    return productItem;
  }