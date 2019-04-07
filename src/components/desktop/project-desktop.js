import React, { Component } from 'react';
import './project-desktop.scss';
import ProjCard from '../common/proj-card'
import data from '../../assets/proj.json'


class ProjectDesktop extends Component {
  render() {
    return (
      <div className='project-container-desktop'>
        <h1>These are some of the projects I've done</h1>
        <div className='card-container'>
          {data.map(item => 
            <ProjCard {...item} />
          )}
        </div>
      </div>
    );
  }
}

export default ProjectDesktop;