import React from 'react'

export default ({ data }) => {
  const projects = data.allAirtable.edges

  return (
    <div>
      <h1>Projects</h1>
      <p>What we work on:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(({ node }, i) =>
            <tr key={i}>
              <td>
                {node.Name}
              </td>
              <td>
                {node.Description}
              </td>
              <td>
                {node.Status}
              </td>
              <td>
                <a href={node.GitHub}>{node.GitHub}</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
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
      }
    }
  }
}
`
