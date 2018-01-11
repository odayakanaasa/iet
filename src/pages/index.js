import React from 'react'
import ietLogo from '../img/iet-logo.svg'

const IndexPage = () => (
  <div style={{ fontSize: '1.5em' }}>
    <h1>Office of Innovation & Emerging Technology</h1>
    <img src={ietLogo} alt="iet" style={{ float: 'right', height: '12em' }} />
    <p>We build web apps at the City of Detroit.</p>
  </div>
)

export default IndexPage
