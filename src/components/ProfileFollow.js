import React, { PropTypes } from 'react'

const ProfileFollow = props => (
  <div className="action last-section">
    <input
      type="button"
      className={props.isFollowing ? 'btn btn-danger btn-lg' : 'btn btn-success btn-lg'}
      value={props.isFollowing ? 'Unfollow' : 'Follow'}
      onClick={props.handleToggleFollow}
    />
  </div>
)

ProfileFollow.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  handleToggleFollow: PropTypes.func.isRequired,
}

export default ProfileFollow
