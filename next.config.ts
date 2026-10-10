import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: '/blog/pourquoi-avoir-un-site-web-en-2025',
        destination: '/blog/pourquoi-avoir-un-site-web-en-2026-2027',
        permanent: true,
      },
      {
        source: '/blog/tendances-design-ui-ux-2025',
        destination: '/blog/tendances-design-ui-ux-2026-2027',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
