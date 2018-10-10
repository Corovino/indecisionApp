import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndecisionApp from './Components/IndecisionApp';

class App extends Component {
  render() {
    return (
      <div className="App">
           <IndecisionApp />
      </div>
    );
  }
}

export default App;
