import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
