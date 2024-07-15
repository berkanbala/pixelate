/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // experimental: {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
  },
  // },
};

module.exports = nextConfig;
