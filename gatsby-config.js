module.exports = {
  siteMetadata: {
    title: `Gatsby with contenta CMS`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contenta`,
      options: { baseUrl: `http://contenta.dev` },
    },
    `gatsby-plugin-offline`
  ],
}
