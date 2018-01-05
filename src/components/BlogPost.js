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
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
query BlogPostQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`
