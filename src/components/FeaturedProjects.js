import React from 'react'
import Link from 'gatsby-link'

import ProjectBox from './ProjectBox'

const containerStyle = {
  padding: '10px',
  borderLeft: 'solid 8px teal',
  fontSize: '1em',
}

export default ({ projects }) => {
  return (
    <div style={containerStyle}>
      <h2>Project highlights:</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {projects.map(({ node }, i) =>
          <ProjectBox key={i} project={node} />
        )}
      </div>
      <br />
      <Link to="/projects">See all Projects</Link>
    </div>
  )
}
