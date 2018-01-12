import React from 'react'
import PropTypes from 'prop-types'

const About = ({ data }) => (
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>We're a team of programmers in the Department of Innovation & Technology at the City of Detroit.</p>
  </div>
)

About.propTypes = {
  data: PropTypes.object,
}

export default About

export const query = graphql`
query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
