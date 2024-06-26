/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // transpilePackages: ["lucide-react"],
    remotePatterns: [
      {
        // protocol: "http",
        hostname: "localhost",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
