import React from 'react'

export default ({ data }) => {
  const projects = data.allAirtable.edges
  const project = projects.map((p) => 
    <li key={p.node.id}>{p.node.Name}</li>
  )

  return (
    <div>
      <h1>Projects</h1>
      <p>What we do:</p>
      <ul>{project}</ul>
    </div>
  )
}

export const query = graphql`
query ProjectsQuery {
  allAirtable {
    edges {
      node {
        id
        Name
      }
    }
  }
}
`
