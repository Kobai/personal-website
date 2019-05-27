import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './containers/Home'
import Experience from './containers/Experience'
import Project from './containers/Project'
import Pics from './containers/Pics'


class App extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    return (
      <div style={{
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems':'center'
      }}>
        {!isMobile &&
          <div className='bg'>
          </div>
        }
        <Home />
        <Experience />
        <Project />
	{/*<Pics />*/}
      </div>
    );
  }
}

export default App;
