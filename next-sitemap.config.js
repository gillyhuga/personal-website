/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gillyhuga.com',
    generateRobotsTxt: true,
    sitemapSize: 1000,
  };