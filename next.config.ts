import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't pick the wrong lockfile
  // when multiple package-lock.json files exist above this directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
