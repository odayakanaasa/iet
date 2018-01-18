import React from 'react'
import PropTypes from 'prop-types'

const boxStyle = {
  height: '225px',
  width: '275px',
  margin: '.5em',
  padding: '.5em',
  backgroundColor: '#eee',
}

const TeamMember = ({ person }) => (
  <div style={boxStyle}>
    <h4>{person.name}
      <br />
      <span style={{ fontSize: '.8em' }}>— {person.title}</span>
    </h4>
    <p>{person.blurb}</p>
  </div>
)

TeamMember.PropTypes = {
  person: PropTypes.object,
}

export default TeamMember
