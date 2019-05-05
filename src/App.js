import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './containers/Home'
import Experience from './containers/Experience'
import Project from './containers/Project'
import Pics from './components/common/pics'


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Experience />
        <Project />
        <Pics />
      </div>
    );
  }
}

export default App;
