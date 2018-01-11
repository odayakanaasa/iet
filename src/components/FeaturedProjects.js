import React from 'react';

export default ({ projects }) => {
    return (
      <div>
        <h1>Projects</h1>
        <p>What we work on:</p>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {projects.map(({ node }, i) =>
            <div>{node.Name}</div>
          )}
        </div>
      </div>
    )
  }
