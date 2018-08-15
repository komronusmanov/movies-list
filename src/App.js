import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieList from './components/MovieList'
import Search from './components/Search'
import MovieInfo from './components/MovieInfo'
import Navigation from './components/Nav'

class App extends Component {

state={
  images: {},
}

componentDidMount() {
  this.getImages()
}

getImages = () => {
    const api = 'https://api.themoviedb.org/'
    const key = 'b295643997349c72adec90f1a06d9baa'
    fetch(`${api}/3/configuration?api_key=${key}`)
    .then(res => res.json())
    .then((data) => {this.setState({images: data.images})
  })
}

  render() {

  const { images } = this.state

  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route exact path='/'
            render={() =>(
              <div>
                <MovieList
                  value='now_playing'
                  images={images}
                  title='Welcome To Movies App'/>
              </div>
            )}/>
            <Route exact path='/popular'
              render={() =>(
                <MovieList
                  value='popular'
                  images={images}
                  title='Popular'/>
              )}/>
              <Route exact path='/top_rated'
                render={() =>(
                  <MovieList
                    value='top_rated'
                    images={images}
                    title='Top Rated'/>
                )}/>
                <Route exact path='/upcoming'
                  render={() =>(
                    <MovieList
                      value='upcoming'
                      images={images}
                      title='Upcoming Movies'/>
                  )}/>
                  <Route exact path='/now_playing'
                    render={() =>(
                      <MovieList
                        value='now_playing'
                        images={images}
                        title='Now In Movie Theathers'/>
                    )}/>
                    <Route exact path='/search'
                      render={() =>(
                        <Search
                          images={images}/>
                      )}/>
                      <Route exact path='/info/:id'
                        render={({history, match:{params:{id}}, location: {state}}) => (
                          <MovieInfo
                            id={id}
                            images={images}/>
                        )}/>
                      </Switch>
                    </div>
                  </Router>
                )
              }
            }

export default App
