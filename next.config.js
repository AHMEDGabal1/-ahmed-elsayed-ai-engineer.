const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = '/-ahmed-elsayed-ai-engineer.';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? REPO_NAME : '',
  assetPrefix: isProd ? REPO_NAME : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
