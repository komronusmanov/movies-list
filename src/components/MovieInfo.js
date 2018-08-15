import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Cast from './Cast'
import Trailers from './Trailers'

class MovieInfo extends Component {

  state = {
    movie: {},
    cast: [],
    videos: [],
  }

  componentWillMount() {
    this.getDetails()
  }

  componentDidUpdate() {
    document.body.style.backgroundImage = 'url(' + this.props.images.base_url + 'original' + this.state.poster + ')'
  }

  getDetails = () => {
    const id = this.props.id
    const api = 'https://api.themoviedb.org/'
    const key = 'b295643997349c72adec90f1a06d9baa'
    fetch(`${api}3/movie/${id}?api_key=${key}&append_to_response=videos,credits`)
    .then(res => res.json())
    .then((data) => { this.setState({ movie: data, cast: data.credits.cast, videos: data.videos.results, poster: data.backdrop_path})
  })
}

render() {

  const { movie, cast, videos } = this.state
  const { images } = this.props


  return (
    <div className='movie-info'>
      <div className='movie-basic-info'>
        <div className='movie-poster-big'>
          <img
            className='movie-poster-big'
            src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
            alt="poster"
            />
        </div>
        <div className='movie-basic-info-text'>
          <h1 className='movie-title'>{movie.original_title}</h1>
          <h3>{movie.tagline}</h3>
          <div className='movie-info-rating'>
            <div>
              <Rating votes={movie.vote_average}/>
            </div>
            <div className='movie-user-score'>
              User Score
            </div>
          </div>
          <div className='movie-info-overview'>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              Release Date:
              <h4>{movie.release_date}</h4>
            </div>
            <div className='col-md-6'>
              Box Office:
              <h4>{movie.revenue}$</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              Running Time:
              <h4>{movie.runtime} minutes</h4>
            </div>
            <div className='col-md-6'>
              Total Budget:
              <h4>{movie.budget}$</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='movie-cast-trailers'>
        <div>
          <h1 className='cast'>Cast</h1>
          <div className='movie-cast'>
            {cast.slice(0, 5).map(actor => (
              <Cast actor={actor} key={actor.id} images={images}/>
            ))}
          </div>
        </div>
        <div>
          <h1 className='cast'>Videos</h1>
          <div className='movie-trailers'>
            {videos.slice(0,3).map(video => (
              <Trailers video={video} key={video.id}/>
            ))}
          </div>
        </div>
      </div>
      <Link to='/'>
        <div className='backbutton'>
          🡄 HOME
        </div>
      </Link>
    </div>
  )
}
}


export default MovieInfo
