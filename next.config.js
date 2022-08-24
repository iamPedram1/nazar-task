/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
