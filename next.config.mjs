/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol:"https",hostname:"img.clerk.com"}
    ]
  },
    webpack: (config, { isServer }) => {
      // Do not manually add mini-css-extract-plugin, Next.js handles it.
      return config;
    },
  };
  
  export default nextConfig;
  