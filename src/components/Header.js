import React from 'react'
import Link from 'gatsby-link'

const headerStyle = {
  height: '5em',
  borderBottom: 'solid .25em #333',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  paddingLeft: '2em',
  fontSize: '1.25em',
}

const Header = () => (
  <div style={headerStyle}>
    <Link to="/" style={{ paddingRight: '1.5em' }}><strong>IET</strong></Link>
    <Link to="/about/" style={{ paddingRight: '1.5em' }}>About</Link>
    <Link to="/projects/" style={{ paddingRight: '1.5em' }}>Projects</Link>
    <Link to="/blog/" style={{ paddingRight: '1.5em' }}>Blog</Link>
    <Link to="/contact/" style={{ paddingRight: '.5em' }}>Contact</Link>
  </div>
)

export default Header
