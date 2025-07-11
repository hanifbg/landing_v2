import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ugc.production.linktr.ee',
        port: '',
        pathname: '/**', // This allows any path from this domain
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8081',
        pathname: '/**', // This allows any path from this domain
      },
      {
        protocol: 'https',
        hostname: 'iqibla-backend.onrender.com',
        port: '',
        pathname: '/**', // This allows any path from this domain
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**', // This allows any path from this domain
      },
      {
        protocol: 'https',
        hostname: '188.166.206.209',
        port: '',
        pathname: '/**', // This allows any path from this domain
      },
      // Add other remote patterns if you have images from other domains
    ],
  },
  // other Next.js configurations...
};

export default nextConfig;