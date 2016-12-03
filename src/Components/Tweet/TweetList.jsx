import React, { Component } from 'react'
// import {retrive} from '../../rest/crud/retrive.js'

import Tweet from './Tweet.jsx'
import './TweetList.css'
export default class TweetList extends Component {


  render() {
    let tweetNodes = <h1>Loading</h1>
    if (this.props.tweets) {
      tweetNodes = this.props.tweets.map((tweet, i) => {
        return (<Tweet
          owner={tweet._acl.creator}
          postDate={tweet._kmd.lmt}
          url={tweet.avatarUrl}
          content={tweet.content}
          author={tweet.author}
          likes={tweet.likes}
          id={tweet._id}
          edit={this.props.edit}
          delete={this.props.delete}
          addLike={this.props.addLike}
          onkeyup={this.props.onkeyup}
          comments={tweet.comments}
          key={i}
          tags={tweet.tags}
          isLiked={tweet.isLiked}
          />)
      })
    }

    return (

      <div className='ui feed'>
        {tweetNodes}
      </div>
    )
  }

}
