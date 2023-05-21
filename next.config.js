/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env:{
    DB_URI:'mongodb://localhost:27017/nextAuth',
    AUTH_SECRET:"tanyaaJain",
    NEXTAUTH_SECRET:"hemlo",
    NEXTAUTH_URL:'http://localhost:3000'
  }
};

module.exports = nextConfig;

