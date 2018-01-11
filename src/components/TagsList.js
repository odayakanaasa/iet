import React from 'react'
import Link from 'gatsby-link'

const liStyle = {
  backgroundColor: '#eee', 
  marginRight: '1em', 
  padding: '.5em', 
  listStyle: 'none', 
  display: 'inline-block',
}

const TagsList = ({ tags }) => (
  <ul>
    {tags.map((tag, i) => (
      <li key={i} style={liStyle}>
        <Link to={`/tags/${tag}`}>{tag}</Link>
      </li>
    ))}
  </ul>
)

export default TagsList
