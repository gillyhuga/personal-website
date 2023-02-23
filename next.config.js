const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: process.env.NEXT_PUBLIC_RESUME_URL || '/',
        basePath: false,
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
