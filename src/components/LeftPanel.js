import React, { PropTypes } from 'react'
import Profile from './Profile'


const LeftPanel = props => (
  <div className="left-panel">
    <Profile
      name={props.name}
      username={props.username}
      numTweets={props.numTweets}
      numFollowers={props.numFollowers}
      numFollowings={props.numFollowings}
      isOwnProfile={props.isOwnProfile}
      isFollowing={props.isFollowing}
      toggleFollow={props.toggleFollow}
    />
  </div>

)

LeftPanel.propTypes = {
  isOwnProfile: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  toggleFollow: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
}

export default LeftPanel
