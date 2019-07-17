module.exports = {
  siteMetadata: {
    title: `Mario Kart 8 Deluxe`,
    description: `Here you will find details of all the elements in the game Mario Kart 8 Deluxe, for Nintendo Switch. From racers statistics, vehicle information on the game, descriptions of the cups that can be competed, to a gallery of images so you can feel the adrenaline rush of driving a kart at amazing speeds.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`
      }
    }
    // `gatsby-plugin-offline`
    // This (optional) plugin enables Progressive Web App + Offline functionality.
    // To learn more, visit: https://gatsby.dev/offline
  ]
}