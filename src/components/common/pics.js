import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'

class Pics extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/Mobile/i)
    let IMAGES = [
      {
        src: "https://i.imgur.com/esJ99Ll.jpg",
        thumbnail: "https://i.imgur.com/esJ99Ll.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 174,
      },
      {
        src: "https://i.imgur.com/WNbq1LH.jpg",
        thumbnail: "https://i.imgur.com/WNbq1LH.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 183,
      },
      {
        src: "https://i.imgur.com/JEWLPvr.jpg",
        thumbnail: "https://i.imgur.com/JEWLPvr.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 320,
      },
      {
        src: "https://i.imgur.com/rhWslLX.jpg",
        thumbnail: "https://i.imgur.com/rhWslLX.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/kM7CbVz.jpg",
        thumbnail: "https://i.imgur.com/kM7CbVz.jpg",
        thumbnailWidth: 231,
        thumbnailHeight: 370,
      },
      {
        src: "https://i.imgur.com/REpcmCy.jpg",
        thumbnail: "https://i.imgur.com/REpcmCy.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/dEAYXQ5.jpg",
        thumbnail: "https://i.imgur.com/dEAYXQ5.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/UkL048v.jpg",
        thumbnail: "https://i.imgur.com/UkL048v.jpg",
        thumbnailWidth: 212,
        thumbnailHeight: 370,
      },
      {
        src: "https://i.imgur.com/3v1OsEM.jpg",
        thumbnail: "https://i.imgur.com/3v1OsEM.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/DFoHvP9.jpg",
        thumbnail: "https://i.imgur.com/DFoHvP9.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/4u5xTbq.jpg",
        thumbnail: "https://i.imgur.com/4u5xTbq.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/wS8GBy9.jpg",
        thumbnail: "https://i.imgur.com/wS8GBy9.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/0SETQgy.jpg",
        thumbnail: "https://i.imgur.com/0SETQgy.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 370,
      },
      {
        src: "https://i.imgur.com/taA7NpU.jpg",
        thumbnail: "https://i.imgur.com/taA7NpU.jpg",
        thumbnailWidth: 213,
        thumbnailHeight: 370,
      },
      {
        src: "https://i.imgur.com/lv8gO0n.jpg",
        thumbnail: "https://i.imgur.com/lv8gO0n.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 220,
      },
      {
        src: "https://i.imgur.com/uXcVsrx.jpg",
        thumbnail: "https://i.imgur.com/uXcVsrx.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 213,
      },
      {
        src: "https://i.imgur.com/VWQlPBj.jpg",
        thumbnail: "https://i.imgur.com/VWQlPBj.jpg",
        thumbnailWidth: 220,
        thumbnailHeight: 370,
      },
      {
        src: "https://i.imgur.com/oFPTIXY.jpg",
        thumbnail: "https://i.imgur.com/oFPTIXY.jpg",
        thumbnailWidth: 370,
        thumbnailHeight: 220,
      },
    ]
    return (
      <div style={{
        'display': 'block',
        'width': '100%',
        'height': '100vh',
      }}>
        <div style={{
          'display': 'flex',
          'flexDirection': 'column',
          'alignItems': 'center',
          'textAlign': 'center',
          'justifyContent': 'center'
        }}>
          <h1>Click Click</h1>
          <p style={{'color': '#757575'}}>
            Every now and then, I like taking pictures. Here are some of my favorites!
          </p>
          <div style={{ 'width': '100%' }}>
            <Gallery
              images={IMAGES}
              enableLightbox={false}
              enableImageSelection={false} />
          </div>
        </div>
      </div>
    )
  }
}

export default Pics;