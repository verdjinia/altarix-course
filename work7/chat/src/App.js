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
	  	{ author: "Я", message: "=)", me:true },
		{ author: "Петр Петров", message: "Привет!" },
		{ author: "Петр Петров", message: "Как дела с JavaScript?" },
	  ],
		}
	} 
	render() {
	return (
	  <div className="App">
		<Header />
		<MessageList messages={this.state.messages} />
		<MessageForm />
	  </div>
	);
	}
}

export default App;
