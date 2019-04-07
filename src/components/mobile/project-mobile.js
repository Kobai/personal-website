import React, { Component } from 'react';
import './project-mobile.scss';
import ProjCard from '../common/proj-card'
import data from '../../assets/proj.json'


class ProjectMobile extends Component {
  render() {
    return (
      <div className='project-container-mobile'>
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

export default ProjectMobile;