import React, { Component } from 'react';
import './project-desktop.scss';
import ProjCard from '../common/proj-card'
import data from '../../assets/proj.json'

class ProjectDesktop extends Component {
  render() {
    return (
      <div className='project-container-desktop'>
        <h1>{"#Projects"}</h1>
        <div className='gallery'>
          {data.map(item =>
            <div className='card-container'>
              <ProjCard {...item} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectDesktop;