/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    domains: ["dhananipeg.com"],
  },
};

export default nextConfig;
