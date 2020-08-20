import React, { Component } from 'react'
import ListHome from './ListHome/ListHome'
import homeServices from '../../Services/homeServices'


class HomePage extends Component {
  state = {
    trendFilms: [],
  }



  componentDidMount() {
    this.getTrending()
  }

  getTrending = () => {
    homeServices.getTrendingFilms().then(data => this.setState({ trendFilms: data.results }))
  }

 
 
  render() {
    const { trendFilms } = this.state
    return (
      <section>
        <h2>Trending today</h2>
        <ListHome trendFilms={trendFilms} />
      </section>
    )
  }
}
export default HomePage