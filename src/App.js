import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './containers/Home'
import Experience from './containers/Experience'


class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Experience/>
      </div>
    );
  }
}

export default App;
