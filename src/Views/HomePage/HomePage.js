import React, { Component } from 'react'
import ListHome from './ListHome/ListHome'
import homeServices from '../../Services/homeServices'
import { withRouter } from 'react-router-dom';
import css from './HomePage.module.css'
const queryString = require('query-string');


class HomePage extends Component {
  state = {
    trendFilms: [],
    form:''
  }

  componentDidMount() {
    const { query: nextQuery } = queryString.parse(this.props.location.search)

    if (nextQuery) {
      this.getTrending()
    } else {
      this.getTrending()
    }
  }

  componentDidUpdate(prevState, prevProps) {
    // const {query:prevQuery} = queryString.parse(prevState.location.search)
    //   const {query: nextQuery } = queryString.parse(this.props.location.search)

    //   console.log(prevQuery,'prevQuery')
    //   console.log(nextQuery,'nextQuery')
    //   if(prevQuery !==nextQuery){

    //   }
  }

  getTrending = () => {
    homeServices.getTrendingFilms().then(data => this.setState({ trendFilms: data.results }))
  }


  render() {
    const { trendFilms } = this.state

    return (
      <section className={css.section}>
        <h2>Trending today</h2>
        <hr/>
        <ListHome films={trendFilms} />
      </section>
    )
  }
}
export default withRouter(HomePage)