import type { NextConfig } from "next";

/**
 * GitHub Pages serves this repo from /portfolio, and serves static files only.
 *
 * NEXT_PUBLIC_BASE_PATH is set by the deploy workflow. It stays empty locally
 * so `npm run dev` keeps working at http://localhost:3000 with no prefix.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a plain static site into out/ — Pages cannot run a Node server.
  output: "export",
  basePath,
  // No Next.js image optimizer on Pages, so images ship as authored.
  images: { unoptimized: true },
  // Emit /about/index.html rather than /about.html, which static hosts prefer.
  trailingSlash: true,
};

export default nextConfig;
