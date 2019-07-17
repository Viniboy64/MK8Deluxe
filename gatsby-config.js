module.exports = {
  siteMetadata: {
    title: `Mario Kart 8 Deluxe`,
    description: `Here you will find details of all the elements in the game Mario Kart 8 Deluxe, for Nintendo Switch. From racers statistics, vehicle information on the game, descriptions of the cups that can be competed, to a gallery of images so you can feel the adrenaline rush of driving a kart at amazing speeds.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-filesystem`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-manifest`,
    `gatsby-starter-default`

    // `gatsby-plugin-offline`
    // This (optional) plugin enables Progressive Web App + Offline functionality.
    // To learn more, visit: https://gatsby.dev/offline
  ]
}