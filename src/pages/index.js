import React from 'react'
import ietLogo from '../img/iet-logo.svg'

import FeaturedProjects from '../components/FeaturedProjects';
import LatestBlogs from '../components/LatestBlogs';

const IndexPage = ({ data }) => (
  <div style={{ fontSize: '1.5em' }}>
    <h1>Office of Innovation & Emerging Technology</h1>
    <img src={ietLogo} alt="iet" style={{ float: 'right', height: '12em' }} />
    <FeaturedProjects projects={data.allAirtable.edges} />
    <LatestBlogs blogs={data.allMarkdownRemark.edges} />
    <p>We build web apps at the City of Detroit.</p>
  </div>
)

export default IndexPage

export const query = graphql`
query FeaturesProjectsQuery {
  allAirtable(sort: { fields: [Status], order: ASC }, limit: 3) {
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
