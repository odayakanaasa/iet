import React from 'react';

export default ({ blogs }) => {
    return (
      <div>
        <h1>Blogs</h1>
        <p>What we blog on:</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {blogs.map(({ node }, i) =>
            <div>{node.frontmatter.title}</div>
          )}
        </div>
      </div>
    )
  }
