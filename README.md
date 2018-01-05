# IET

A simple website & blog to share with the Internet what our team is up to.

It's built with [Gatsby](https://www.gatsbyjs.org/), a static site generator for [React](https://reactjs.org/) & [GraphQL](http://graphql.org/).

We track our projects in [Airtable](https://airtable.com/), and use the `gatsby-source-airtable` plugin to query and populate them on the page.

# Install

You'll need [Node.js](https://nodejs.org/en/) with NPM first.

Install Gatsby's command line tools globally:

`npm install --global gatsby-cli`

# Usage

`gatsby develop` starts the development server. 

Now your app is running and hot reloading at `localhost:8000`.

GraphiQL - a brower interface for writing & testing queries - is also running at `localhost:8000/___graphql`.

A sample GraphiQL query looks like this:
```
{
  site {
    siteMetadata {
      title
    }
  }
}
```
It queries the metadata you defined in `gatsby-config.js` and returns a data object like this:
```
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "IET"
      }
    }
  }
}
```
