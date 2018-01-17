import React from 'react'
import PropTypes from 'prop-types'

import ietLogo from '../img/iet-logo.svg'

import FeaturedProjects from '../components/FeaturedProjects'
import LatestBlogs from '../components/LatestBlogs'

const IndexPage = ({ data }) => (
  <div>
    <h1>Office of Innovation & Emerging Technology</h1>
    <img src={ietLogo} alt="iet" style={{ float: 'right', height: '12em' }} />
    <div style={{ fontSize: '1.5em' }}>
      <p>We build web apps at the City of Detroit.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
        sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
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
