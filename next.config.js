const { withSentryConfig } = require("@sentry/nextjs");
const { withPageAuthRequired } = require('@auth0/nextjs-auth0');

module.exports = nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: process.env.NEXT_PUBLIC_RESUME_URL || '/',
        basePath: false,
        permanent: false,
      },
      {
        source: '/login',
        destination: process.env.AUTH0_BASE_URL + process.env.NEXT_PUBLIC_LOGIN_PATH || '/',
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
