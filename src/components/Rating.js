import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'

class Rating extends Component {

  render() {

    const percentage = this.props.votes*10

    return (
      <div
        className='movie-card-rating'>
        <CircularProgressbar
          initialAnimation={true}
          percentage = {percentage}
          text = {`${percentage}%`}
          strokeWidth = '9'
          styles={{
              trail: { stroke: '#008c35' },
              path: { stroke: `rgba(0, 255, 97)` },
              text: { fill: 'white', fontSize: '30px', fontWeight: 'bold' },
                 }}
          />
      </div>
    )
  }
}

export default Rating
