import React from 'react'

export default ({ data }) => {
  console.log(data)

  return (
    <div>
      <h1>Blog</h1>
      <p>Where we write about what we're doing.</p>
      <p>We have {data.allMarkdownRemark.totalCount} posts so far.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div 
          key={node.id} 
          style={{ borderBottom: '1px dotted magenta', marginTop: '1em' }}>
          <h3>
            {node.frontmatter.title}{" "}
            <span style={{ color: '#a2a2a2' }}>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
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
        }
        excerpt
      }
    }
  }
}
`;
