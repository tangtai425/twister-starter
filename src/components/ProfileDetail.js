import React, { PropTypes } from 'react'

const ProfileDetail = props => (
  <div className="detail">
    <div className="col">
      <div className="text">Tweets</div>
      <div className="number">{props.numTweets}</div>
    </div>
    <div className="col">
      <div className="text">Followers</div>
      <div className="number">{props.numFollowers}</div>
    </div>
    <div className="col">
      <div className="text">Following</div>
      <div className="number">{props.numFollowings}</div>
    </div>
  </div>
)

ProfileDetail.propTypes = {
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
}

export default ProfileDetail
