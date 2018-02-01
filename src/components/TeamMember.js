import React from 'react'
import PropTypes from 'prop-types'

import github from '../img/github-circle.svg'

const boxStyle = {
  margin: '.5em',
  paddingLeft: '.5em',
}

const iconStyle = {
  width: '25px',
}

const TeamMember = ({ person }) => (
  <div style={{ ...boxStyle, borderLeft: `.5em solid ${person.color}` }}>
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1em', justifyContent: 'space-between', }}>
      <h4>{person.name}
        <br />
        <span style={{ fontSize: '.8em', }}>— {person.title}</span>
      </h4>
      <span>{ person.github ? <a href={person.github}><img src={github} style={iconStyle} /></a> : '' }</span>
    </div>
    <p>{person.blurb}</p>
  </div>
)

TeamMember.PropTypes = {
  person: PropTypes.object,
}

export default TeamMember
