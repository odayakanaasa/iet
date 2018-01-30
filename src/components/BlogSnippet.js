import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import TagsList from './TagsList'

const containerStyle = {
  marginTop: '1em',
  paddingLeft: '1em',
  borderLeft: '.5em solid #8c56bb',
}

const BlogSnippet = ({ node }) => (
  <div key={node.id} style={containerStyle}>
    <h3>
      <Link to={node.fields.slug}>
        {node.frontmatter.title}{" "}
          <span style={{ color: '#aaa' }}>— {node.frontmatter.date}</span>
      </Link>
    </h3>
    <p>{node.excerpt}</p>
    <TagsList tags={node.frontmatter.tags} />
  </div>
)

BlogSnippet.propTypes = {
  node: PropTypes.object,
}

export default BlogSnippet
