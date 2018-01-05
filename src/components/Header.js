import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">IET</Link>
      </h1>
      <ul>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/projects/">Projects</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
      </ul>
    </div>
  </div>
)

export default Header
