# Gatsby contenta

Example site that demostrates how to build Gatsby sites that pull data from the Contenta CMS.

In this example we are assuming that the Contenta CMS is intalled locally on http://contenta.dev

See gatsby-config.js

```
  plugins: [
    {
      resolve: `gatsby-source-contenta`,
      options: { baseUrl: `http://contenta.dev` },
    },
    `gatsby-plugin-offline`
  ],

```