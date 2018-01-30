import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import github from '../img/github-circle.svg'
import link from '../img/open-in-new.svg'

const borderColors = {
  '1. Idea': '#8c56bb',
  '2. Planning': '#5599ff',
  '3. Development': '#ff9955',
  '4. Launching soon': '#3bd7ab',
  '5. Production': '#278b7e',
}

const boxStyle = {
  height: '250px', 
  width: '300px', 
  margin: '.5em', 
  padding: '.5em', 
  backgroundColor: '#eee',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 100,
}

const boxMainStyle = {
  flex: '1 0 auto',
}

const iconStyle = {
  width: '25px',
  marginRight: '.25em',
}

const ProjectBox = ({ project }) => (
  <div style={{ ...boxStyle, borderLeft: `.5em solid ${borderColors[project.Status]}` }}>
    <div style={boxMainStyle}>
      <h4 style={{ marginBottom: '.5em' }}>{project.Name}</h4>
      <p style={{ marginBottom: '.25em' }}>
        { project.Website ? <a href={project.Website}><img src={link} style={iconStyle} /></a> : '' }
        { project.GitHub ? <a href={project.GitHub}><img src={github} style={iconStyle} /></a> : '' }
      </p>
      <span>{project.Description}</span>
    </div>
    <div>
      <p style={{ marginBottom: '.25em', }}>
        { project.Tools ? 'Tools: ' + _.join(project.Tools, ', ') : '' }
        <br />
        { 'Stage: ' + _.split(project.Status, '. ', 2).slice(1) }
      </p>
    </div>
  </div>
)

ProjectBox.propTypes = {
  project: PropTypes.object,
}

export default ProjectBox
