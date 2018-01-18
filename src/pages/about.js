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
      <p>The Office of Innovation & Emerging Technology (IET) is a team of programmers at the <a href="http://www.detroitmi.gov/">City of Detroit</a>.</p>
      <p>We partner with City departments to build digital tools that solve civic problems and information challenges. Sometimes that looks like 
        sunlighting a new type of City data and sometimes it means building web applications that help people communicate with the City in new ways. 
        In any case, our projects aim to simplify internal work flows and make data more accessible to residents.</p>
      <p>We value working in the open and in iterations. We approach projects by identifying a problem, developing prototypes, testing 
        with users first-hand, and evaluating what makes a solution impactful. We bring a fresh toolkit of open-source libraries and softwares 
        to interact with the larger ecosystem of enterprise systems traditionally used throughout the City. All of our code is on <a href="https://github.com/cityofdetroit">Github</a>.</p>
      <p>Have an idea, project pitch, or just want to say hello? 
        Get in touch by email at <a href="mailto:iet@detroitmi.gov">iet@detroitmi.gov</a>.</p>
      <h3>Our team</h3>
      {us.map((you, i) => (
        <div key={i}>
          <h4>{you.name}</h4>
        </div>
      ))}
      <h3>History</h3>
      <p>The Office of Innovation & Emerging Technology (IET) was established in 2015 under the Department of Innovation & Technology's restructuring plan.
        Near the same time, the City of Detroit signed into law it's first open data policy known as Government Open Data Access To 
        All (GO DATA) or Executive Order 2015-2. This policy deemed all City information open by default, and that commitment to transparency shaped 
        how IET would prioritize working in the open and sharing our code, methods, and ideas along the way.</p>
      <p>Our current team came together in 2017. Detroit's Chief Innovation Officer (CIO) Beth Niblock acts as our 
        interim director. We appreciate these past team members:</p>
      <ul>
        <li>Garlin Gilchrist was the first Director of Innovation & Emerging Technology and helped us establish our footing and articulate a vision. 
          He left to run for local office in spring 2017</li>
        <li>Joel Howrani-Heeres was Director of Open Data through spring 2017, when he took on a new post as Detroit's Director of Sustainability</li> 
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
