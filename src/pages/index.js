import React from 'react'
import PropTypes from 'prop-types'

import ietLogo from '../img/iet-logo.svg'

import FeaturedProjects from '../components/FeaturedProjects'
import LatestBlogs from '../components/LatestBlogs'

const IndexPage = ({ data }) => (
  <div>
    <h1>Office of Innovation & Emerging Technology</h1>
    <img src={ietLogo} alt="iet" style={{ float: 'right', height: '12em' }} />
    <div style={{ fontSize: '1.25em' }}>
      <p>We build web tools at the City of Detroit.</p>
      <p>Read about <a href='./about'>our team and who we are.</a></p>
      <p>Here's <a href='./projects'>a list of projects</a> we're working on.</p>
      <p>We occasionally <a href='./blog'>write blogs about open data and our projects</a>.</p>
      <p>Finally, if you've got an idea or question, <a href='./contact'>get in touch with us!</a></p>
    </div>
    <FeaturedProjects projects={data.allAirtable.edges} />
    <br />
    <LatestBlogs blogs={data.allMarkdownRemark.edges} />
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const query = graphql`
query FeaturedContentQuery {
  allAirtable(sort: { fields: [Status], order: ASC }, limit: 3, filter: { Featured: { eq: true } }) {
    edges {
      node {
        id
        Name
        Description
        Status
        Type
        GitHub
        Website
        Tools
      }
    }
  },
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
