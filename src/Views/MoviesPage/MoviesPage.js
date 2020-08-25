import React, { Component } from 'react'
import SearchMovie from '../MovieDetailesPage/SearchMovie/SearchMovie'
import services from '../../Services/searchServices'
const queryString = require('query-string');




class MoviesPage extends Component {

  componentDidMount() {
    const {query: nextQuery } = queryString.parse(this.props.location.search)
    if(nextQuery){
      this.resultOfSearch()
    }
  }


  resultOfSearch = () => {
    services.getResultOfSearch().then(data => console.log('data', data))
  }


  hendelChangeSearch = (query) => {
    console.log('query', query)
    console.log('this.props', this.props)
    this.props.history.push({
      ...this.props.location.pathname,
      search: `query=${query}`
    })
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