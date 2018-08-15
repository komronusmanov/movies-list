import React, { Component } from 'react'
import Youtube from 'react-youtube'

class Trailers extends Component {

  render() {

    const { video } = this.props
    const opts = {
      height: '150',
      width: '200',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <div style={{margin: 10}}>
        <Youtube
          videoId={video.key}
          opts={opts}
          origin='https://'
          />
      </div>
    )
  }
}

export default Trailers
