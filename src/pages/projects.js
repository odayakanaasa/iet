import React from 'react'
import PropTypes from 'prop-types'

import ProjectBox from '../components/ProjectBox'

const Projects = ({ data }) => (
  <div>
    <h1>Projects</h1>
    <div style={{ maxWidth: '800px' }}>
      <p>IET builds digital tools at the City of Detroit. This is what we're working on and thinking about:</p>
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {data.allAirtable.edges.map(({ node }, i) =>
        <ProjectBox key={i} project={node} />
      )}
    </div>
    <div style={{ maxWidth: '800px', marginTop: '1em', }}>
      <p>In the spirit of open-source, we encourage your feedback and welcome contributions through feature requests, bug reports, and code 
        patches. Find notes on using Github issues and pull requests in our <a href="https://github.com/cityofDetroit/code-standards">Code 
        Standards</a> repo, or ask a question by email at <a href="mailto:iet@detroitmi.gov">iet@detroitmi.gov</a>.</p>
      <p>If you're interested in working together on one of these projects or pitching us a new one, get in touch and we'll start a conversation
        to determine if it's a good fit.</p>
      </div>
  </div>
)

Projects.propTypes = {
  data: PropTypes.object,
}

export default Projects

export const query = graphql`
query ProjectsQuery {
  allAirtable(sort: { fields: [Status, Name], order: ASC }) {
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
