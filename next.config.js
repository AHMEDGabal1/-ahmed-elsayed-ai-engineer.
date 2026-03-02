const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/-ahmed-elsayed-ai-engineer.' : '',
  assetPrefix: isProd ? '/-ahmed-elsayed-ai-engineer./' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
