module.exports = {
  siteMetadata: {
    title: `Versan`,
    description: `We all love cheesecakes! Versan offers the best cheesecakes in town. Cheesecakes are filled in clean glass jars and tin cans too. Browse our shop to choose the most satisfying cheesecake/s for you!`,
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
