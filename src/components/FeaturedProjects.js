import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import ProjectBox from './ProjectBox'

const containerStyle = {
  padding: '10px',
  borderLeft: 'solid .25em #333',
  fontSize: '1em',
}

const FeaturedProjects = ({ projects }) => (
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

FeaturedProjects.propTypes = {
  projects: PropTypes.array,
}

export default FeaturedProjects
