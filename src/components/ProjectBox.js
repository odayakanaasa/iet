import React from 'react';
import github from '../img/github-circle.svg';
import link from '../img/open-in-new.svg';

const boxStyle = {
    height: '225px',
    width: '275px',
    backgroundColor: '#ddd',
    margin: '.5em',
    padding: '.5em'
}

const iconStyle = {
    width: '25px',
    marginRight: '.25em'
}

const ProjectBox = ( {project} ) => (
    <div style={boxStyle}>
        <h4 style={{marginBottom: '.5em'}}>{project.Name}</h4>
        <p style={{marginBottom: '.25em'}}>
            {project.Website ? <a href={project.Website}><img src={link} style={iconStyle} /></a> : ''}
            {project.GitHub ? <a href={project.GitHub}><img src={github} style={iconStyle} /></a> : ''}
        </p>
        <span style={{display: 'inline-block'}}>{project.Description}</span>
        <p style={{position: 'relative', bottom: '0px', fontWeight: 'bold', verticalAlign: 'bottom'}}>Status: {project.Status}</p>
    </div>
)

export default ProjectBox;