import React, { Component } from 'react';
import './experience-mobile.scss';
import ExpCard from '../common/exp-card'
import data from '../../assets/exp.json'

class ExperienceMobile extends Component {
  render() {
    return (
      <div>
        <div className='experience-container-mobile'>
          <h1>Heres where I've been recently</h1>
          <div className='card-container'>
            {data.map(item =>
              <ExpCard info={item}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceMobile;