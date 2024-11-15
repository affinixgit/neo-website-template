// config/config.js
const config = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3006/api/v1',
    subscriptionId:process.env.NEXT_PUBLIC_SUBSCRIPTION_ID || "a990fb30-7621-4cea-926a-b5ad5d6ea5ef"
  };
  
  export default config;
  