module.exports = {
  siteMetadata: {
    title: `devhost 2022`,
    description: `devhost is the annual flagship event of SOSC. Our prime goal is to bring young and skilled developers from anywhere across the globe under the same umbrella.`,
    author: `@sosc`,
    siteUrl: "https://devhost.sosc.org.in/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#17e873`,
        theme_color: `#17e873`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
