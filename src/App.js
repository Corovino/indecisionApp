import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import logo from './logo.svg';
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
