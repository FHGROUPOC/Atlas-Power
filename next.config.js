/** @type {import('next').NextConfig} */
const nextConfig = {

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This wildcard allows images from ANY secure website
      },
      {
        protocol: 'http',
        hostname: '**', // This wildcard allows images from ANY unsecure website
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  
};

module.exports = nextConfig;