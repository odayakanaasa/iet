import React from 'react'
import Link from 'gatsby-link'

const liStyle = {
  display: 'inline-block',
  marginRight: '2em',
  marginTop: '2em',
}

const Header = () => (
  <div style={{ borderBottom: 'solid 3px teal' }}>
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li style={liStyle}><Link to="/"><strong>IET</strong></Link></li>
        <li style={liStyle}><Link to="/about/">About</Link></li>
        <li style={liStyle}><Link to="/projects/">Projects</Link></li>
        <li style={liStyle}><Link to="/blog/">Blog</Link></li>
        <li style={liStyle}><Link to="/contact/">Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
