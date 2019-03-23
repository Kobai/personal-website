import React, { Component } from 'react';
import './home-desktop.scss';
import Tooltip from '@material-ui/core/Tooltip'


class HomeDesktop extends Component {
  render() {
    return (
      <div>
        <div className='home-container-desktop'>
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

export default HomeDesktop;