import React, { Component } from 'react'
import './CreateTweet.css'
import Hashtag from '../../Hashtag/Hashtag'
class CreateTweet extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (

      <form className='ui form' onSubmit={this.props.onsubmit}>
        <div className='field'>
          <label>
            New tweet
          </label>
          <textarea name='content' placeholder='If text contains #tags they will be added...' />
        </div>
        <button className='ui button blue' type='submit'>
          Tweet
        </button>
      </form>
    )
  }

}

export default CreateTweet
