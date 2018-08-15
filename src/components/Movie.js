import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EllipsisText  from 'react-ellipsis-text'
import Rating from './Rating'

class Movie extends Component {

  render() {

    const { movie, images } = this.props

    return (
      <div className='movie-card'>
        <Link to={`/info/${movie.id}`} style={{textDecoration: 'none'}}>
          <div className='movie-poster'>
            <img
              src={images.base_url +`w342` + movie.poster_path}
              width='185'
              height='278'
              alt='Movie Poster'
              />
            </div>
          </Link>
          <div className='movie-card-info'>
            <div className='movie-card-title-wrapper'>
              <div className='movie-card-title'>
                <a href={`/info/${movie.id}`} className='movie-link'>
                  {movie.title}
                </a>
                <span>{movie.release_date}</span>
              </div>
            </div>
            <div className='movie-rating'>
              <Rating votes={movie.vote_average}/>
              <div className='movie-user-score'>
                User Score
              </div>
            </div>
            <div className='movie-card-overview'>
              <EllipsisText
                text={movie.overview}
                length={260}
                className='movie-overview-text'/>
            </div>
            <div className='view-more'>
              <a
                className='movie-link'
                href={`/info/${movie.id}`}
                >
                More Info...
              </a>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Movie
