import {  productList ,productTags } from "./dummydata";

export async function getProductItem(productSlug) {
    const productItem = productList.find(event => event.slug === productSlug);
    if (!productItem) {
        throw new Error(`Product with ID ${productSlug} not found.`);
    }
    return productItem;
  }

  export async function getProductsByCategory(categorySlug) {
    const products = productList.filter(event => event.idCategory === 1);
    if (products.length === 0) {
        throw new Error(`No products found for category ${categorySlug}.`);
    }
    return products;
  }

  export async function getProductTags() {
    return productTags;
  }  