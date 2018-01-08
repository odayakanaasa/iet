import React from 'react'
import Link from 'gatsby-link'

// Template component for auto-generated blog post pages
// Make a post by adding a new markdown file in '/posts'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <h1>Blog</h1>
      <h2>{post.frontmatter.title}</h2>
      <h4>{post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <br />
      <ul>
        {post.frontmatter.tags.map((tag, i) => (
          <li 
            key={i}
            style={{ backgroundColor: '#f1f1f1', marginRight: '1em', padding: '.5em', listStyle: 'none', display: 'inline-block' }}>
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
