import React, { Component } from 'react'

class Cast extends Component {

  render() {

    const { actor, images } = this.props

    return (
      <div className='cast-card'>
          <img
            style={{ borderRadius: '10px 10px 0px 0px'}}
            height='188'
            width='100%'
            src={images.base_url + `original` + actor.profile_path}
            alt="pic" />
          <div className='actor-character'>
            {actor.character}
          </div>
            <div className='actor-name'>
          {actor.name}
        </div>
    </div>
    )
  }
}

export default Cast
