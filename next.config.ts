import type { NextConfig } from "next";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ac-tech-website";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub project pages: https://<user>.github.io/<repo>/
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  env: {
    // next/image unoptimized src does not always get basePath; use asset() helper
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
