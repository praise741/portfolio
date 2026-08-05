/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true"
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    output: "export",
  }),
}

module.exports = nextConfig
