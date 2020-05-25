module.exports = {
  siteMetadata: {
    title: `Versan`,
    description: `A software company with expertise on Qt and C++ for embedded, mobile and desktop.`,
    author: `Janno Vergara`,
    siteUrl: `http://www.versan.com.ph`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
