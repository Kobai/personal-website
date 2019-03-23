import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';


class App extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if(isMobile) {
      return (
        <div>
          <Home/> 
        </div>
      );
    } else {
      return (
        <div>
          <Home/>
        </div>
      );
    }
  }
}

export default App;
