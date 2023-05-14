/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env:{
    DB_URI:'mongodb://localhost:27017/nextAuth',
    AUTH_SECRET:"tanyaaJain"
  }
};

module.exports = nextConfig;

