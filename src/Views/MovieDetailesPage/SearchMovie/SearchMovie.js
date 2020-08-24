import React, { Component } from 'react'
import services from '../../../Services/searchServices'
import ListHome from '../../HomePage/ListHome/ListHome'
import { withRouter } from 'react-router-dom';
const queryString = require('query-string');


 class SearchMovie extends Component {
  state = {
    search: '',
    searchQuery:[]

  }

  
 



  hendelSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state;
    this.props.onSubmit(search)
    services.getResultOfSearch(search).then(({results})=> this.setState({ searchQuery: results}))
  }

  hendelChange = (e) => {
    const { value } = e.target
    this.setState({ search: value})
  }





  render() {
    const { search, searchQuery } = this.state;
    return (
      <form onSubmit={this.hendelSubmit}>
        <label>
          <input type="text" value={search} name="query" onChange={this.hendelChange} />
          <button type="submit">Search</button>
          {searchQuery.length > 0 && <ListHome films={searchQuery}/>}
        </label>
      </form>
    )
  }
}

export default withRouter(SearchMovie)
