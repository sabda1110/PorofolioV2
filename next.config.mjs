/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/api/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats-eight-theta.vercel.app',
        pathname: '/api/**'
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
