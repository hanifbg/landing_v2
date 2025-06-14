/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iqibla.com',
        pathname: '/cdn/shop/files/**'
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'ugc.production.linktr.ee',
        pathname: '/**'
      }
    ]
  },
};

module.exports = nextConfig;