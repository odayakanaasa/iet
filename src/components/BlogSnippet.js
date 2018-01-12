import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import TagsList from './TagsList'

const containerStyle = {
  marginTop: '1em',
  padding: '10px',
  borderLeft: '.25em solid magenta',
}

const BlogSnippet = ({ node }) => (
  <div key={node.id} style={containerStyle}>
    <Link to={node.fields.slug}>
      <h3>{node.frontmatter.title}{" "}
        <span style={{ color: '#aaa' }}>— {node.frontmatter.date}</span>
      </h3>
    </Link>
    <p>{node.excerpt}</p>
    <TagsList tags={node.frontmatter.tags} />
  </div>
)

BlogSnippet.propTypes = {
  node: PropTypes.object,
}

export default BlogSnippet
