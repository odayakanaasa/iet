import React from 'react'
import PropTypes from 'prop-types'

import ProjectBox from '../components/ProjectBox'

const Projects = ({ data }) => (
  <div>
    <h1>Projects</h1>
    <p>What we work on:</p>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.allAirtable.edges.map(({ node }, i) =>
        <ProjectBox key={i} project={node} />
      )}
    </div>
  </div>
)

Projects.propTypes = {
  data: PropTypes.object,
}

export default Projects

export const query = graphql`
query ProjectsQuery {
  allAirtable(sort: { fields: [Status], order: ASC }) {
    edges {
      node {
        id
        Name
        Description
        Status
        Type
        GitHub
        Website
      }
    }
  }
}
`
