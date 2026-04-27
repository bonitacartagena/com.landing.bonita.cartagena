/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    localPatterns: [
      {
        pathname: '/**',
        search: '?v=2',
      },
    ],
  },
}

export default nextConfig
