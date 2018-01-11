import React from 'react'
import Link from 'gatsby-link'

// Template component for auto-generated blog post pages
// Make a post by adding a new markdown file in '/posts'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1>{post.frontmatter.title}</h1>
      <h2><span style={{ color: '#aaa'}}>— {post.frontmatter.date}</span></h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <br />
      <ul>
        {post.frontmatter.tags.map((tag, i) => (
          <li 
            key={i}
            style={{ backgroundColor: '#eee', marginRight: '1em', padding: '.5em', listStyle: 'none', display: 'inline-block' }}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <Link to="/blog">Back to all blog posts</Link>
    </div>
  )
}

export const query = graphql`
query BlogPostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      tags
    }
  }
}
`
