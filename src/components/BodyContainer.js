import React, { Component, PropTypes } from 'react'
import MainPanel from './MainPanel'
import LeftPanel from './LeftPanel'

class BodyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'mrtang',
      name: 'Korrakhod Baiya',
      tweets: [],
      numFollowers: 0,
      numFollowings: 0,
      isFollowing: false,
    }
    this.handdleToggleFollow = this.handdleToggleFollow.bind(this)
  }

  handdleToggleFollow() {
    if (this.state.isFollowing) {
      this.setState({
        isFollowing: false,
      })
    } else {
      this.setState({
        isFollowing: true,
      })
    }
  }

  addToTweetList(tweet) {
    const tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length

    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ],
    })
  }

  render() {
    const { name, username, tweets, numFollowers, numFollowings, isFollowing } = this.state

    return (
      <div className="container body">
        <LeftPanel
          name={name}
          username={username}
          tweets={tweets}
          numFollowers={numFollowers}
          numFollowings={numFollowings}
          toggleFollow={this.handdleToggleFollow}
          isOwnProfile={this.props.ownerUsername === username}
          isFollowing={isFollowing}
          numTweets={3}
        />
        <MainPanel enableTweet={this.props.enableTweet} />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  enableTweet: PropTypes.bool.isRequired,
  ownerUsername: PropTypes.string.isRequired,
}

export default BodyContainer
