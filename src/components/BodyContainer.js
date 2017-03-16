import React, { Component, PropTypes } from 'react'
import MainPanel from './MainPanel'
import LeftPanel from './LeftPanel'
import * as helper from '../helper'

class BodyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '@mrtang',
      name: 'Korrakhod Baiya',
      tweets: [],
      numFollowers: 0,
      numFollowings: 0,
      isFollowing: false,
    }
    this.handdleToggleFollow = this.handdleToggleFollow.bind(this)
    this.addToTweetList = this.addToTweetList.bind(this)
  }

  componentDidMount() {
    const fetchedData = {}

    helper.fetchTweets(this.props.ownerUsername)
    .then((tweets) => { fetchedData.tweets = tweets })
    .then(() => helper.fetchProfile(this.props.ownerUsername))
    .then((profile) => {
      fetchedData.numFollowers = profile.numFollowers
      fetchedData.numFollowings = profile.numFollowings
    })
    .then(() => helper.fetchFollowStatus(this.state.username, this.props.ownerUsername))
    .then((status) => {
      fetchedData.isFollowing = status
      this.setState(fetchedData)
    })
    .then(console.log(this.state))

    // const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
    // const filter = `{ "where": { "username": "${this.state.username}" }}`

    // fetch(`${uri}?filter=${filter}`, {
    //   mode: 'cors',
    // })
    // .then(response => response.json())
    // .then((tweets) => {
    //   this.setState({
    //     tweets,
    //   })
    // })
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
        <MainPanel
          name={name}
          username={username}
          enableTweet={this.props.enableTweet}
          tweets={tweets}
          addToTweetList={this.addToTweetList}
        />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  enableTweet: PropTypes.bool.isRequired,
  ownerUsername: PropTypes.string.isRequired,
}

export default BodyContainer
