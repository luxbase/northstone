import type { NextConfig } from "next";

// Set at build time by the GitHub Pages workflow (e.g. "/northstone").
// Empty for local dev and for a future custom-domain deploy.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
