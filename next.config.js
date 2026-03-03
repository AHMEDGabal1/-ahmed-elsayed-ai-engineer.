const isProd = process.env.NODE_ENV === 'production';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const REPO_NAME = '/-ahmed-elsayed-ai-engineer.';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? REPO_NAME : '',
  assetPrefix: isGithubActions ? REPO_NAME : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
