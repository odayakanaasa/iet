import React from 'react'
import Link from 'gatsby-link'

const containerStyle = {
  padding: '10px',
  borderLeft: 'solid 8px teal',
  fontSize: '1em',
}

export default ({ blogs }) => {
  return (
    <div style={containerStyle}>
      <h2>Recent blog posts:</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {blogs.map(({ node }, i) =>
          <div>
            {node.frontmatter.title}
          </div>
        )}
      </div>
      <br />
      <Link to="/blog/">Read the Blog</Link>
    </div>
  )
}
