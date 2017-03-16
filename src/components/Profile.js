import React, { PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

const Profile = props => (
  <div className="profile">
    <ProfileHeader
      name={props.name}
      username={props.username}
    />
    <ProfileDetail
      numTweets={props.numTweets}
      numFollowers={props.numFollowers}
      numFollowings={props.numFollowings}
    />
    {props.isOwnProfile
    ? null
    : <ProfileFollow
      isFollowing={props.isFollowing}
      handleToggleFollow={props.toggleFollow}
    />}
  </div>

)

Profile.propTypes = {
  isOwnProfile: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  toggleFollow: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
}

export default Profile
