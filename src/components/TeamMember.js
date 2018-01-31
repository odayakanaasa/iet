import React from 'react'
import PropTypes from 'prop-types'

const boxStyle = {
  margin: '.5em',
  paddingLeft: '.5em',
}

const TeamMember = ({ person }) => (
  <div style={{ ...boxStyle, borderLeft: `.5em solid ${person.color}` }}>
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
