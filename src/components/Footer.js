import React from 'react'
import Link from 'gatsby-link'

import ietLogo from '../img/iet-logo.svg'

const footerStyle = {
  height: '10em',
  backgroundColor: '#eee',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
}

const Footer = () => (
  <div style={footerStyle}>
    <div style={{ display: 'inline-flex' }}>
      <div style={{ paddingRight: '1em' }}>
        <Link to="/">
          <img src={ietLogo} alt="iet" style={{ height: '5em' }} />
        </Link>
      </div>
      <div>
        <p>
          <Link to="/about/"><strong>About IET</strong></Link>
          <br /><Link to="/projects/">Projects</Link>
          <br /><Link to="/blog/">Blog</Link>
        </p>
      </div>
    </div>
    <div>
      <p>
        <strong>Get in touch:</strong>
        <br />Email <a href="mailto:iet@detroitmi.gov">iet@detroitmi.gov</a>
        <br />Github <a href="https://github.com/cityofdetroit">@CityOfDetroit</a>
      </p>
    </div>
  </div>
)

export default Footer
