import React, { Component } from 'react';
import ExperienceDesktop from '../components/desktop/experience-desktop';
import ExperienceMobile from '../components/mobile/experience-mobile';


class Experience extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if(isMobile) {
      return (
        <div>
          <ExperienceMobile/> 
        </div>
      );
    } else {
      return (
        <div>
          <ExperienceDesktop/>
        </div>
      );
    }
  }
}

export default Experience;
