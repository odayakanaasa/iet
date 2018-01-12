import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import TagsList from './TagsList'

const containerStyle = {
  padding: '10px',
  borderLeft: 'solid .5em teal',
  fontSize: '1em',
}

const snippetStyle = {
  display: 'inline-block',
  margin: '.5em',
  borderLeft: '.5em solid magenta',
  padding: '10px',
}

const LatestBlogs = ({ blogs }) => (
  <div style={containerStyle}>
    <h2>Recent blog posts:</h2>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {blogs.map(({ node }, i) =>
        <div key={i} style={snippetStyle}>
          <Link to={node.fields.slug}>
            <h4>{node.frontmatter.title}{" "}
              <span style={{ color: '#aaa' }}>— {node.frontmatter.date}</span>
            </h4>
          </Link>
          <TagsList tags={node.frontmatter.tags} />
        </div>
      )}
    </div>
    <br />
    <Link to="/blog/">Read the Blog</Link>
  </div>
)

LatestBlogs.propTypes = {
  blogs: PropTypes.array,
}

export default LatestBlogs
