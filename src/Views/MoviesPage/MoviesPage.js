import React, { Component } from 'react'
import SearchMovie from '../MovieDetailesPage/SearchMovie/SearchMovie'
import services from '../../Services/searchServices'
import css from './MoviesPage.module.css'
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
      <section className={css.boxMovies}>
        <h2>Let's choose an interesting movie for you?</h2>
        <hr/>
        <SearchMovie onSubmit={this.hendelChangeSearch} />
      </section>

    )
  }
}
export default MoviesPage