import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './containers/Home'
import Experience from './containers/Experience'
import Project from './containers/Project'
import Pics from './containers/Pics'


class App extends Component {
  render() {
    return (
      <div style={{
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems':'center'
      }}>
        <Home />
        <Experience />
        <Project />
	    {/*<Pics />*/}
      </div>
    );
  }
}

export default App;
