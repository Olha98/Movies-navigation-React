import React, { Component } from 'react'
import services from '../../../Services/searchServices'
import ListHome from '../../HomePage/ListHome/ListHome'
import { withRouter } from 'react-router-dom';
import css from './SearchMovie.module.css'
const queryString = require('query-string');

class SearchMovie extends Component {
  state = {
    search: '',
    searchQuery: [],
    placeholder: "Hi BRO! Enter the title of the movie..."
  }

  componentDidMount() {
    const { query: nextQuery } = queryString.parse(this.props.location.search)
    
    if (nextQuery) {
      services.getResultOfSearch(nextQuery).then(({ results }) => this.setState({ searchQuery: results }))
    }
  }


  hendelSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state;
    this.props.onSubmit(search)
    services.getResultOfSearch(search).then(({ results }) => this.setState({ searchQuery: results }))
    this.setState({ search: "" })
  }

  hendelChange = (e) => {
    const { value } = e.target
    this.setState({ search: value })
  }


  render() {
    const { search, searchQuery, placeholder } = this.state;
    return (
      <div >
        <form onSubmit={this.hendelSubmit} className={css.form} >
          <label>
            <input type="text" value={search} name="query" onChange={this.hendelChange} autoComplete="off"
              autoFocus
              placeholder={placeholder} />
            <button type="submit" className={css.btn}>Search</button>
          </label>
        </form>
        {searchQuery.length > 0 && <ListHome films={searchQuery} />}
      </div>
    )
  }
}

export default withRouter(SearchMovie)
