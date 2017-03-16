import React, { PropTypes } from 'react'

const ProfileHeader = props => (
  <div className="header">
    <div className="name">{props.name}</div>
    <div className="screen-name">{props.username}</div>
  </div>
)

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default ProfileHeader
