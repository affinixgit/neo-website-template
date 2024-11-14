/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.ctfassets.net",
      "placeholder.com",
      "bucket-chat-classhub.s3.ap-south-1.amazonaws.com",
      "tbs-website-live.s3.ap-south-1.amazonaws.com",
      "static-us-west-2.similarcdn.com",
      
    ],
  },
  async rewrites() {
    return [
      {
        source: '/cars',
        destination: '/products',
      },
    ];
  },
};

export default nextConfig;
