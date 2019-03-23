import React, { Component } from 'react';
import './Home.scss';


class Home extends Component {

  render() {
    return (
      <div>
        <div className='home-container'>
          <div className='text-container'>
            <p className='name'>Victor Kobayashi</p>
            <div className='subtext'>
              <p>CS @ UWaterloo</p>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;