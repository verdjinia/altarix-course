import React, { Component } from 'react'
import Message from './Message'
import './MessageList.css'

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList">
		{this.props.messages.map((message, i) => (
		  <Message key={i} {...message} />
		))}
      </div>
    )
  }
}

export default MessageList