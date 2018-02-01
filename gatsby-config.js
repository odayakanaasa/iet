module.exports = {
  siteMetadata: {
    title: `IET`,
  },
  pathPrefix: `/iet`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `key4Wr58a6nmBAGTU`,
        baseId: `appCFPbAUuYs9JPIv`,
        tableName: `Projects`,
        tableView: `Grid view`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    }
  ],
}
