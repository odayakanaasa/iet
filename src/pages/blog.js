import React from 'react'
import Link from 'gatsby-link'

import TagsList from '../components/TagsList'

export default ({ data }) => {
  return (
    <div>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div 
          key={node.id} 
          style={{ borderBottom: '1px dotted #aaa', marginTop: '1em' }}>
          <Link
            to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{ color: '#aaa' }}>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
          <TagsList tags={node.frontmatter.tags} />
        </div>
      ))}
    </div>
  )
}

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
