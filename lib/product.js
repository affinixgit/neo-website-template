import {  productList ,productTags } from "./dummydata";

export async function getProductItem(productSlug) {
    const productItem = productList.find(event => event.slug === productSlug);
    if (!productItem) {
        throw new Error(`Product with ID ${productSlug} not found.`);
    }
    return productItem;
  }


  export async function getProductTags() {
    return productTags;
  }  