/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "d2y4kcl4gu8ysz.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // 이미지 최적화 설정
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1년
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // 성능 최적화
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
