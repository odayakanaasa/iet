import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import BlogSnippet from '../components/BlogSnippet'

const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <div style={{ maxWidth: '800px' }}>
      <p>IET builds digital tools at the City of Detroit. This is where we talk about the projects that we're working on and share what we're learning through both 
        reflections and code snippets. You'll also find posts of the housekeeping variety, like monthly open data changelogs.</p>
        <p>Have a question, comment, or idea? Send us an email at <a href="mailto:iet@detroitmi.gov">iet@detroitmi.gov</a>.</p>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <div key={i}>
        <BlogSnippet node={node} />
      </div>
    ))}
  </div>
)

Blog.propTypes = {
  data: PropTypes.object,
}

export default Blog

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
