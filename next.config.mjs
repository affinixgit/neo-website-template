/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net",
      "placeholder.com",
      "bucket-chat-classhub.s3.ap-south-1.amazonaws.com",
      "affinix-website-dev.s3.ap-south-1.amazonaws.com",
      "static-us-west-2.similarcdn.com",
      "affiinx-website-live.s3.ap-south-1.amazonaws.com",
    ],
  },
  rewrites: async () => {
    // Get the default path from environment variables
    const defaultPath = process.env.NEXT_PUBLIC_DEFAULT_SERVICE_PATH || "services";

    // Dynamically generate rewrites
    return [
      { source: `/${defaultPath}`, destination: `/services` },
      { source: `/${defaultPath}/:slug`, destination: `/services/:slug` },
      { source: `/${defaultPath}/location/:slug*`, destination: `/services/location/:slug*` },
      { source: `/${defaultPath}/tag/:slug*`, destination: `/services/tag/:slug*` },
    ];
  },
};

export default nextConfig;
