import React, { Component } from 'react'
import './MessageForm.css'

class MessageForm extends Component {
  render() {
    return (
      <form className="MessageForm">
        <div className="input-container">
			<textarea>Поле для ввода текста сообщения...</textarea>
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