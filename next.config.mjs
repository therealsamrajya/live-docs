/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Do not manually add mini-css-extract-plugin, Next.js handles it.
      return config;
    },
  };
  
  export default nextConfig;
  