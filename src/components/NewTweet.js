import React, { Component, PropTypes } from 'react'
import config from '../config/index'

class NewTweet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.postToTweet = this.postToTweet.bind(this)
  }

  handleOnChange(e) {
    this.setState({
      tweetText: e.target.value,
    })
  }

  handleOnClick() {
    this.postToTweet({
      name: this.props.name,
      username: this.props.username,
      tweetText: this.state.tweetText,
    })
  }

  handleOnKeyDown(e) {
    if (e.keyCode !== 13) {
      return
    }
    e.preventDefault()
    this.postToTweet({
      name: this.props.name,
      username: this.props.username,
      tweetText: this.state.tweetText,
    })
  }

  postToTweet(tweet) {
    fetch(`http://${config.api.host}:${config.api.port}/api/tweets`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(tweet),
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({
        tweetText: '',
      })
      this.props.addToTweetList(data)
    })
    // this.props.addToTweetList(tweet)
    // this.setState({
    //   tweetText: '',
    // })
  }

  render() {
    return (
      <div className="new-tweet">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="tweet-text col-sm-10">
              <input
                type="text"
                id="tweetText"
                className="form-control"
                placeholder="What's happening"
                onChange={this.handleOnChange}
                onKeyDown={this.handleOnKeyDown}
                value={this.state.tweetText}
              />
            </div>
            <div className="col-sm-2">
              <input
                type="button"
                className="btn btn-default"
                value="Tweet"
                onClick={this.handleOnClick}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewTweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  addToTweetList: PropTypes.func.isRequired,
}

export default NewTweet
