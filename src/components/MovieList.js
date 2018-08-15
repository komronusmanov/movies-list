import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    this.fetchMovies()
    document.body.style.backgroundImage = `url('')`
  }

  fetchMovies = () => {
    const { value } = this.props
    const api = 'https://api.themoviedb.org/'
    const key = 'b295643997349c72adec90f1a06d9baa'
    fetch(`${api}/3/movie/${value}?api_key=${key}&language=en-US&page=1`)
    .then(res => res.json())
    .then((data) => { this.setState({ movies: data.results })
  })
}

render() {

  const { movies } = this.state
  const { images, title } = this.props

  return (
    <div  className='movies-list'>
    <div className='page-title'>
      <h1>{title}</h1>
    </div>
      {movies.map((movie) => (
        <Movie id={movie.id} key={movie.id} movie={movie} images={images}/>
      ))}
  </div>
  )
}
}

export default MovieList
