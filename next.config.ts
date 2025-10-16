import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "merchant.pelpay.ng" },
      { protocol: "https", hostname: "www.betacare.ng" },
      { protocol: "https", hostname: "apps.apple.com" },
    ],
  },
  turbopack: { root: __dirname },
  // Standalone output for Vercel minimal serverless footprint if needed
  output: process.env.VERCEL ? undefined : undefined,
};

export default nextConfig;
