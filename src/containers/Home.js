import React, { Component } from 'react';
import HomeDesktop from '../components/desktop/home-desktop';
import HomeMobile from '../components/mobile/home-mobile';


class Home extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if (isMobile) {
      return (
        <HomeMobile />
      );
    } else {
      return (
        <HomeDesktop />
      );
    }
  }
}

export default Home;
