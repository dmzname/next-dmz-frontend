import webpackConfig from "./config/webpackConfig.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    webpack: (config) => webpackConfig(config),
};

export default nextConfig;
