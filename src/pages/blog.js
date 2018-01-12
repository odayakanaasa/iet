import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import BlogSnippet from '../components/BlogSnippet'

const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
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
