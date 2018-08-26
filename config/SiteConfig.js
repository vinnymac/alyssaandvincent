const now = new Date()
const currentYear = now.getFullYear()

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Alyssa & Vincent', // Navigation and Site Title
  siteTitleAlt: 'Alyssa & Vincent - Wedding', // Alternative Site title for SEO
  siteUrl: 'https://alyssaandvincent.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Wedding overview for Alyssa and Vincent',
  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '', // Twitter Username
  // og: Meta Tags
  ogSiteName: '', // Facebook Site Name
  googleAnalyticsID: '',
  copyright: `Copyright © ${currentYear}. All rights reserved.`, // Copyright in the footer of the site
  // You can translate these three words into your language if you want. They'll be shown on the project page header
  client: 'Client',
  date: 'Date',
  service: 'Service',
  // Manifest and Progress color
  themeColor: '#6b266b',
  backgroundColor: '#ffffff',
  // Settings for typography.js
  headerFontFamily: 'Merriweather',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px'
}
