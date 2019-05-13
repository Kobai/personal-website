import React, { Component } from 'react';
import PicsDesktop from '../components/desktop/pics-desktop';
import PicsMobile from '../components/mobile/pics-mobile';


class Pics extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    if (isMobile) {
      return (
        <PicsMobile />
      );
    } else {
      return (
        <PicsDesktop />
      );
    }
  }
}

export default Pics;
