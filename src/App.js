import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndecisionApp from './Components/IndecisionApp';

IndecisionApp.defaultProps = {
     options : []
}

class App extends Component {
  render() {
    return (
      <div className="App">
           <IndecisionApp  options={["uno","dos"]} />
      </div>
    );
  }
}

export default App;
