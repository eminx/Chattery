import React, { Component } from 'react';
import './App.css';

import { Chattery } from './chattery/Chattery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chattery />
      </div>
    );
  }
}

export default App;
