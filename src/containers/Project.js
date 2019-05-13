import React, { Component } from 'react';
import ProjectDesktop from '../components/desktop/project-desktop';
import ProjectMobile from '../components/mobile/project-mobile';


class Project extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if(isMobile) {
      return (
        <ProjectMobile/> 
      );
    } else {
      return (
        <ProjectDesktop/>
      );
    }
  }
}

export default Project;
