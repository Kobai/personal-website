import React, { Component } from 'react';
import './experience-desktop.scss';
import ExpCard from '../common/exp-card'
import data from '../../assets/exp.json';

class ExperienceDesktop extends Component {
  render() {
    return (
      <div className='experience-container-desktop'>
        <h1>{"Here's where I've been recently"}</h1>
        <div className='gallery'>
          {data.map(item =>
            <div className='card-container'>
              <ExpCard {...item} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceDesktop;