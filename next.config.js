const { withSentryConfig } = require("@sentry/nextjs");

module.exports = nextConfig = {
  images: {
    domains: ['i.imgur.com'],
  },
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

module.exports = withSentryConfig(
  module.exports,
  {
    silent: true,
    org: "giltech",
    project: "personal-website",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
  }
);
