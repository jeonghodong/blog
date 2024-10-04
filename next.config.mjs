/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // 개발 환경을 위한 설정
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
