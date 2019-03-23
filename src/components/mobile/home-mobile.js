import React, { Component } from 'react'
import './home-mobile.scss';

class HomeMobile extends Component {
  render() {
    return (
      <div>
        <div className='home-container-mobile'>
          <div className='text-container'>
            <p className='name'>Victor K.</p>
            <div className='subtext'>
              <p>CS @ UWaterloo</p>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeMobile;
