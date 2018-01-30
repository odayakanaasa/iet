import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import TagsList from './TagsList'

const containerStyle = {
  paddingLeft: '1em',
  borderLeft: 'solid .25em #123e3f',
  fontSize: '1em',
}

const snippetStyle = {
  display: 'inline-block',
  margin: '.5em',
  borderLeft: '.5em solid #8c56bb',
  padding: '10px',
}

const LatestBlogs = ({ blogs }) => (
  <div style={containerStyle}>
    <h2>Recent blog posts:</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
      {blogs.map(({ node }, i) =>
        <div key={i} style={snippetStyle}>
          <h4>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}{" "}
                <span style={{ color: '#aaa' }}>— {node.frontmatter.date}</span>
            </Link>
          </h4>
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
