/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // GitHub Pages serves this project under /barter_labs; Netlify/custom domains use the root.
  basePath: isGitHubPages ? "/barter_labs" : "",
};

export default nextConfig;
