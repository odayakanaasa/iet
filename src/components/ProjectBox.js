import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import github from '../img/github-circle.svg'
import link from '../img/open-in-new.svg'

const borderColors = {
    '1. Idea': 'rgba(142, 78, 142, 0.75)',
    '2. Planning': 'rgba(100, 149, 237, 0.75)',
    '3. Development': 'rgba(248, 255, 50, 0.75)',
    '4. Launching soon': 'rgba(255, 159, 5, 0.75)',
    '5. Production': 'rgba(29, 155, 52, 0.75)',
}

const boxStyle = {
    height: '225px', 
    width: '275px', 
    margin: '.5em', 
    padding: '.5em', 
    backgroundColor: '#eee',
}

const iconStyle = {
    width: '25px',
    marginRight: '.25em',
}

const ProjectBox = ({ project }) => (
    <div style={{ ...boxStyle, borderLeft: `.5em solid ${borderColors[project.Status]}` }}>
        <h4 style={{marginBottom: '.5em'}}>{project.Name}</h4>
        <p style={{marginBottom: '.25em'}}>
            {project.Website ? <a href={project.Website}><img src={link} style={iconStyle} /></a> : ''}
            {project.GitHub ? <a href={project.GitHub}><img src={github} style={iconStyle} /></a> : ''}
        </p>
        <span style={{display: 'inline-block'}}>{project.Description}</span>
        <p style={{position: 'relative', bottom: '0px', fontWeight: 'bold', verticalAlign: 'bottom'}}>Stage: {_.split(project.Status, '. ', 2).slice(1)}</p>
    </div>
)

ProjectBox.propTypes = {
    project: PropTypes.object,
}

export default ProjectBox
