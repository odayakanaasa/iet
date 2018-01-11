import React from "react"
import Link from "gatsby-link"
import _ from 'lodash'

// Template component for tags pages
// Add tags to the frontmatter in markdown blog posts

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext

  if (tag) {
    // Subpage for single tag
    return (
      <div>
        <h1>Tags</h1>
        <p>{post.length} blog post{post.length === 1 ? "" : "s"} tagged <span style={{ backgroundColor: '#eee', padding: '.5em'}}>{tag}</span>:</p>
        <ul>
          {post.map(({ i, id, frontmatter, fields }) => {
            return (
              <li key={id + i}>
                <Link to={fields.slug}>
                  <h3>{frontmatter.title}{" "}<span style={{ color: '#a2a2a2' }}>— {frontmatter.date}</span></h3>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to="/blog">Back to all blog posts</Link>
      </div>
    )
  }

  return (
    // All tags page
    <div>
      <h1>Tags</h1>
      <ul>
        {Object.keys(posts).map((tagName, j) => {
          const tags = posts[tagName]
          return (
            <li key={j}>
              <Link to={`/tags/${tagName}`}>{tagName}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
