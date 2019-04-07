import React, { Component } from 'react';
import ProjectDesktop from '../components/desktop/project-desktop';
import ProjectMobile from '../components/mobile/project-mobile';


class Project extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if(isMobile) {
      return (
        <div>
          <ProjectMobile/> 
        </div>
      );
    } else {
      return (
        <div>
          <ProjectDesktop/>
        </div>
      );
    }
  }
}

export default Project;
