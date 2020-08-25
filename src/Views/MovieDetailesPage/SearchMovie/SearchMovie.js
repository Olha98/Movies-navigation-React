import React, { Component } from 'react'
import services from '../../../Services/searchServices'
import ListHome from '../../HomePage/ListHome/ListHome'
import { withRouter } from 'react-router-dom';
import css from './SearchMovie.module.css'


class SearchMovie extends Component {
  state = {
    search: '',
    searchQuery: []
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
    const { search, searchQuery } = this.state;
    return (
      <div >
        <form onSubmit={this.hendelSubmit} className={css.form} >
          <label>
            <input type="text" value={search} name="query" onChange={this.hendelChange} autoComplete="off"
              autoFocus
              placeholder="Hi BRO! Enter the title of the movie..." />
            <button type="submit" className={css.btn}>Search</button>
          </label>
        </form>
        {searchQuery.length > 0 && <ListHome films={searchQuery} />}
      </div>
    )
  }
}

export default withRouter(SearchMovie)
