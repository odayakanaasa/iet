import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import TagsList from './TagsList'

// Template component for auto-generated blog post pages
// Make a post by adding a new markdown file in '/posts'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1>{post.frontmatter.title}</h1>
      <h2><span style={{ color: '#aaa'}}>— {post.frontmatter.date}</span></h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <br />
      <TagsList tags={post.frontmatter.tags} />
      <Link to="/blog">Back to all blog posts</Link>
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object,
}

export default BlogPost

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
