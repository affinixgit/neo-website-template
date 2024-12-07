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
    { source: '/courses', destination: '/services' },   // New rewrite for services to courses
    {
      source: '/courses/:slug',
      destination: '/services/:slug',
    },
    { source: '/courses/location/:slug*', destination: '/services/location/:slug*' },
    { source: '/courses/tag/:slug*', destination: '/services/tag/:slug*' },
  ],
};

export default nextConfig;
