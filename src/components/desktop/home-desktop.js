import React, { Component } from 'react';
import './home-desktop.scss';
import Octocat from '../../assets/img/octocat.png'
import Linkedin from '../../assets/img/linkedin.png'
import Resume from '../../assets/img/resume.png'
import DA from '../../assets/img/da.png'


class HomeDesktop extends Component {
  render() {
    return (
      <div>
        <div className='home-container-desktop'>
          <div className='text-container'>
            <p className='name'>victor kobayashi</p>
            <div className='subtext'>
              <p>
                cs @ uwaterloo
              </p>
            </div>
            <div className='contact'>
              <a href="https://github.com/kobai">
                <img src={Octocat}/>
              </a>
              <a href="https://ca.linkedin.com/in/vkobay">
                <img src={Linkedin}/>
              </a>
              <a href="https://drive.google.com/file/d/1wyTVmV1qqUbSaHbh_2lZnhprU0me9eYR/view?usp=sharing">
                <img src={Resume}/>
              </a>
            </div>
            <img src={DA} className='arrow'/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDesktop;