// const https = require('https');
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
  
//   env:{
//     DB_URI:'mongodb+srv://tanya:jain@cluster0.fr0q5dz.mongodb.net/IdeaNex',
//     AUTH_SECRET:"tanyaaJain",
//     NEXTAUTH_SECRET:"hemlo",
//     NEXTAUTH_URL:'http://localhost:3000',
//     NODE_TLS_REJECT_UNAUTHORIZED: '0',
//   },
//   imgs: {
//     domains: ['encrypted-tbn0.gstatic.com','res.cloudinary.com'],
//   loader: 'cloudinary',
//   path: 'http://res.cloudinary.com/codergirll/img/upload/',
//   },
// };

// module.exports = nextConfig;


const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: 'mongodb+srv://tanya:jain@cluster0.fr0q5dz.mongodb.net/IdeaNex',
    AUTH_SECRET: 'tanyaaJain',
    NEXTAUTH_SECRET: 'hemlo',
    NEXTAUTH_URL: 'http://localhost:3000',
  },
  imgs: {
    domains: ['encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'http://res.cloudinary.com/codergirll/img/upload/',
  },
};

module.exports = nextConfig;
