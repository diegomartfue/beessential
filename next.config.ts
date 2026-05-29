import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/beessential",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
