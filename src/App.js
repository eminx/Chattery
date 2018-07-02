import React, { Component } from 'react';

import { Chattery } from './chattery/Chattery';

const data = {
  meta: {

  },
  messages: [
    {
      content: "Hey babe. Are you there?", 
      senderUsername: "aXehQjieRx2C9HYiF", 
      createdDate: new Date(),
      isFromMe: true
    }, {
      content: "I don't mean now :)", 
      senderUsername: "aXehQjieRx2C9HYiF",
      createdDate: new Date(),
    }, {
      content: "yes", 
      senderUsername: "k2tQJEFcqYcyGYAax",
      createdDate: new Date(),
      isFromMe: true
    }, {
      content: "How do i remove requests ?",
      senderUsername: "k2tQJEFcqYcyGYAax",
      createdDate: new Date(),
      isFromMe: true
    }, {
      content: "Hmm, for now, you can't :)",
      senderUsername: "aXehQjieRx2C9HYiF", 
      createdDate: new Date(),
      isFromMe: true
    }, {
      content: "I've been thinking of Archive Requests feature. But wasn't sure how it should work...", 
      senderUsername: "aXehQjieRx2C9HYiF", 
      createdDate: new Date(),
    }
  ],
}


class App extends Component {
  state = {
    data: data
  }

  onNewMessage = (message) => {
    const { data } = this.state;
    data.messages.push(message);
    this.setState({data});
  } 

  render() {
    return (
      <div className="App">
        <Chattery
          messages={data.messages}
          onNewMessage={this.onNewMessage}
        />
      </div>
    );
  }
}

export default App;
