import React, { Component } from 'react'
import Movie from './Movie'

class Search extends Component {

  state = {
    results: [],
  }

search = (query) => {
  const api = 'https://api.themoviedb.org/3/'
  const key = 'b295643997349c72adec90f1a06d9baa'
  if(query) {
    fetch(`${api}search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => res.json())
      .then((data) => {this.setState({ results: data.results })
    })
  } else {
    this.setState({ results: []})
  }
}

  render() {

    const { results } = this.state
    const { images } = this.props

    return (
      <div className='search'>
        <input
          className='search-input'
          onChange={(event) => this.search(event.target.value)}
          type='text'
          placeholder='Search Movie'
          />
        <div className='search-results'>
        {results.map(result => (
          <Movie movie={result} key={result.id} images={images}/>
        ))}
      </div>
    </div>
    )
  }
}

export default Search
