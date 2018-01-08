import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Where we write about what we do.</p>
      <p>We have {data.allMarkdownRemark.totalCount} post{data.allMarkdownRemark.totalCount === 1 ? "" : "s"} so far.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div 
          key={node.id} 
          style={{ borderBottom: '1px dotted magenta', marginTop: '1em' }}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: 'none' }}>
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{ color: '#a2a2a2' }}>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
          <ul>
            {node.frontmatter.tags.map((tag, i) => (
                <li 
                  key={i}
                  style={{ backgroundColor: '#f1f1f1', marginRight: '1em', padding: '.5em', listStyle: 'none', display: 'inline-block' }}>
                  <Link to={`/tags/${tag}`} style={{ textDecoration: 'none' }}>{tag}</Link>
                </li>
            ))}
          </ul>
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
