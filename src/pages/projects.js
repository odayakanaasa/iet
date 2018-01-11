import React from 'react'
import ProjectBox from '../components/ProjectBox'

export default ({ data }) => {
  const projects = data.allAirtable.edges

  return (
    <div>
      <h1>Projects</h1>
      <p>What we work on:</p>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {projects.map(({ node }, i) =>
          <ProjectBox key={i} project={node} />
        )}
      </div>
    </div>
  )
}

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
