import React, { Component } from 'react'
import './Message.css'
import user from './user.png'

class Message extends Component {
  render() {
    return (
      <div className={"MessageBox" + (this.props.me ? ' right' : '')}>
		<div className="User">
			<img src={user} alt={"user"} />
			<span className="UserName">{this.props.name}</span>
		</div>
		<div className="Message">
			{this.props.text}
		</div>
      </div>
    )
  }
}

export default Message