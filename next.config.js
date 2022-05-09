/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;

const debug = process.env.NODE_ENV !== "production";
const name = "caremaker";

module.exports = {
  assetPrefix: !debug ? `/${name}/` : "",
};
