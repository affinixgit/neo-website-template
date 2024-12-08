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
  rewrites: async () => [
    { source: '/treatments', destination: '/services' },   // New rewrite for services to treatments
    {
      source: '/treatments/:slug',
      destination: '/services/:slug',
    },
    { source: '/treatments/location/:slug*', destination: '/services/location/:slug*' },
    { source: '/treatments/tag/:slug*', destination: '/services/tag/:slug*' },
  ],
};

export default nextConfig;
