/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "d2y4kcl4gu8ysz.cloudfront.net"], // 개발 환경을 위한 설정

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
