import React, { Component } from 'react';
import { db } from './firebase';
import Header from './Header';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import './App.css';

class App extends Component {
	constructor(props) {
	super(props)
	this.state = {
	  messages: [],
		}
	} 
	
	newMessage = push =>{
		const now = Date.now()
		const message ={
			id: now,
			name: "Вершинина Евгения",
			text: push
		}
		db.ref(`/messages/${now}`).set(message);
	}
	
	componentDidMount(){
		const messageRef = db.ref('messages');
		messageRef.on('value', (snapshot) => {
			const messages = snapshot.val();
			this.state.messages = Object.values(messages);
			console.log(this.state.messages);
			this.setState({
				messages: this.state.messages
			})
		})   
	}

	render() {
		return (
		  <div className="App">
			<Header />
			<MessageList messages={this.state.messages} />
			<MessageForm onMessageSend={this.newMessage} />
		  </div>
		);
	}
}

export default App;
