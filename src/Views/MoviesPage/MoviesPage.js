import React, { Component } from 'react'
import SearchMovie from '../MovieDetailesPage/SearchMovie/SearchMovie'
import services from '../../Services/searchServices'



class MoviesPage extends Component {


  componentDidMount() {
    this.resultOfSearch();
  }

  resultOfSearch = () => {
    services.getResultOfSearch().then(data => console.log('data', data))
  }


  hendelChangeSearch = (query) => {
    console.log('query', query)
  }

  render() {
    return (
      <>
        <p>MoviesPage</p>
        <SearchMovie onSubmit={this.hendelChangeSearch} />
      </>

    )
  }
}
export default MoviesPage