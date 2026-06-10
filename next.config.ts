import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/pictures/**',
        search: '',
      },
    ],
    // Allow .jfif files by passing through without optimization issues
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
};

export default nextConfig;
