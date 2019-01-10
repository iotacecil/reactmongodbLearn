import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

class App extends Component {
  render() {
      let boss = '张三'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>editedit{boss}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
