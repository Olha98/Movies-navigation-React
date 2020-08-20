import React, { Component } from 'react'
import ListHome from './ListHome/ListHome'
import homeServices from '../../Services/homeServices'


class HomePage extends Component {
  state = {
    trendFilms: [],
    aboutFilm: ''
  }



  componentDidMount() {
    this.getTrending()

  }

  getTrending = () => {
    homeServices.getTrendingFilms().then(data => this.setState({ trendFilms: data.results }))
  }

  getInfoAboutFilm() {
    homeServices.getInfoFilms().then(data => this.setState({ aboutFilm: data.results }))
  }
  refFilm = (e) => {
    console.log('e.target', e.target)
  }

  render() {
    const { trendFilms } = this.state
    return (
      <section>
        <h2>Trending today</h2>

        <ListHome trendFilms={trendFilms} refFilm={this.refFilm} />

      </section>
    )
  }
}
export default HomePage