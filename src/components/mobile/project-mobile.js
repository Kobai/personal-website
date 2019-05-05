import React, { Component } from 'react';
import './project-mobile.scss';
import ProjCard from '../common/proj-card'
import data from '../../assets/proj.json'


class ProjectMobile extends Component {
  render() {
    return (
      <div className='project-container-mobile'>
        <h1>{'#Projects'}</h1>
        <div class='gallery'>
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

export default ProjectMobile;