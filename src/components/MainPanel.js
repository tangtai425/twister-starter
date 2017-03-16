import React, { PropTypes } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

const MainPanel = props => (
  <div className="main-panel">
    {props.enableTweet
      ? <NewTweet
        name={props.name}
        username={props.username}
        addToTweetList={props.addToTweetList}
      />
      : null}
    <TweetList tweets={props.tweets} />
  </div>
)

MainPanel.propTypes = {
  enableTweet: PropTypes.bool.isRequired,
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToTweetList: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

MainPanel.defaultProps = {
  enableTweet: true,
}

export default MainPanel
