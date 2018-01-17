import React from 'react'
import PropTypes from 'prop-types'

const About = ({ data }) => {
  const us = [
    { 
      name: 'Jimmy McBroom', 
      title: 'GIS Analyst', 
      github: 'https://github.com/jmcbroom', 
      blurb: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      name: 'Juan Carlos Angeles', 
      title: 'Front-end Web Developer', 
      github: '', 
      blurb: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      name: 'Jessica McInchak', 
      title: 'Backend Web Developer', 
      github: 'https://github.com/jessicamcinchak', 
      blurb: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      name: 'Mike Evans', 
      title: 'Internet of Things Developer', 
      github: '', 
      blurb: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }
  ]

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>We're a team of programmers in the Department of Innovation & Technology (DoIT) at the <a href="http://www.detroitmi.gov/">City of Detroit</a>.
        Our team is tasked with prototyping open-source solutions to civic problems and information challenges identified by City staff and 
        residents alike. Sometimes this means sunlighting a new type of City data and sometimes it means building web applications that help people 
        communicate with the City or access services in new ways.</p>
      <p>Whatever the project, we value... pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et 
        netus et malesuada fames ac turpis egestas.</p>
      <h3>Our team</h3>
      {us.map((you, i) => (
        <div key={i}>
          <h4>{you.name}</h4>
        </div>
      ))}
      <h3>History</h3>
      <p>The Office of Innovation & Emerging Technology (IET) was established in 2015 as part of DoIT's restructuring plan.
        Near the same time, the City of Detroit signed into law it's first open data policy known as Government Open Data Access To 
        All (GO DATA) or Executive Order 2015-2. This policy deemed all City information open by default, and that commitment to transparency shaped 
        how IET would prioritize working in the open and sharing our code, methods, and ideas along the way.</p>
      <p>The current IET team came together in 2017. Detroit's Chief Innovation Officer (CIO) Beth Niblock acts as our 
        interim director. We're thankful for the contributions of these IET alumni:</p>
      <ul>
        <li>Garlin Gilchrist was the first Director of Innovation & Emerging Technology, building a foundation for the team and helping us 
          articulate our vision. He left to run for local office in spring 2017</li>
        <li>Joel Howrani-Heeres was the Director of Open Data; now we know him as Detroit's Director of Sustainability</li> 
      </ul>
    </div>
  )
}

About.propTypes = {
  data: PropTypes.object,
}

export default About

export const query = graphql`
query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
