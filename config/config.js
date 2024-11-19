// config/config.js
const config = {
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.affinixdigital.com/api/v1",
  subscriptionId:
    process.env.NEXT_PUBLIC_SUBSCRIPTION_ID ||
    "a990fb30-7621-4cea-926a-b5ad5d6ea5ef",
  imageBaseUrl:
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
    "https://affinix-website-dev.s3.ap-south-1.amazonaws.com/a990fb30-7621-4cea-926a-b5ad5d6ea5ef/website/blog",
};

export default config;
