import React, { Component } from 'react';
import './experience-desktop.scss';
import ExpCard from '../common/exp-card'
import data from '../../assets/exp.json';

class ExperienceDesktop extends Component {
  render() {
    return (
      <div className='experience-container-desktop'>
        <h1>{"Here's where I've been recently"}</h1>
        <div className='card-container'>
          {data.map(item =>
            <ExpCard {...item} />
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceDesktop;