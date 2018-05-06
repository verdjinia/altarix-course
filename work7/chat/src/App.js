import React, { Component } from 'react';
import Header from './Header';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import './App.css';

class App extends Component {
	constructor(props) {
	super(props)
	this.state = {
	  messages: [
		{ author: "Петр Петров", message: "Привет!" },
		{ author: "Петр Петров", message: "Как дела с JavaScript?" },
		{ author: "Я", message: "=)", me: true },
	  ],
		}
	} 
	NewMessage = (text) => {
		this.setState({
		  messages: [...this.state.messages, { author: "Me", me: true, message: text }],
		})
	}
	render() {
		return (
		  <div className="App">
			<Header />
			<MessageList messages={this.state.messages} />
			<MessageForm onMessageSend={this.NewMessage} />
		  </div>
		);
	}
}

export default App;
