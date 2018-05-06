import React, { Component } from 'react'
import './MessageForm.css'

class MessageForm extends Component {
	FormSubmit = (event) => {
		event.preventDefault()
		this.props.onMessageSend(this.textarea.value)
		this.textarea.value = ""
	}
	render() {
		return (
		  <form className="MessageForm" onSubmit={this.FormSubmit}>
			<div className="input-container">
				<textarea ref={(node) => (this.textarea = node)} placeholder = "Поле для ввода текста сообщения..." />
			</div>
			<div className="button-container">
			  <button type="submit">
				Отправить
			  </button>
			</div>
		  </form>
		)
	}
}

export default MessageForm