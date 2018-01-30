import React from 'react'
import Link from 'gatsby-link'

const headerStyle = {
  height: '5em',
  borderBottom: 'solid .25em #123e3f',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: 'center',
  flexFlow: 'row-wrap',
  paddingLeft: '2em',
  fontSize: '1.25em',
}

const spanStyle = {
  paddingRight: '1.5em',
}

const Header = () => (
  <div style={headerStyle}>
    <span style={spanStyle}><Link to="/"><strong>IET</strong></Link></span>
    <span style={spanStyle}><Link to="/about/" >About</Link></span>
    <span style={spanStyle}><Link to="/projects/">Projects</Link></span>
    <span style={spanStyle}><Link to="/blog/">Blog</Link></span>
    <span style={spanStyle}><Link to="/contact/">Contact</Link></span>
  </div>
)

export default Header
