module.exports = {
  siteMetadata: {
    title: `IET`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      }
    }
  ],
}
