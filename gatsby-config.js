module.exports = {
  siteMetadata: {
    title: "CMS WEBSITE",
    author: "Dayne Game",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
