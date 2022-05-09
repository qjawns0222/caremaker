const debug = process.env.NODE_ENV !== "production";
const name = "caremaker";

const nextConfig = {
  assetPrefix: !debug ? `/${name}/` : "",
  reactStrictMode: true,
  images: {
    domains: ["github.com", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
