import React, { Component } from 'react'
import { NavLink, withRouter, Route } from 'react-router-dom'
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'
import services from '../../../Services/creditsServices'
import app from '../../../Services/reviewsServices'
import css from './MovieDetailesMore.module.css'



class MovieDetailesMore extends Component {
  state = {
    idFilm: '',
    results:[],
    cast: []
  }

  componentDidMount() {
    this.getCast()
    this.getReviews()
  }

  getCast() {
    const id = this.props.match.params.id
    services.getCredits(id).then(({ cast }) => this.setState({ cast }))
  }

  getReviews() {
    const id = this.props.match.params.id
    app.getReviews(id).then(({ results }) => this.setState({ results}))
  }

  render() {
    const { cast, results} = this.state
    return (
      <ul className={css.listDetal}>
        <h3>Additional information</h3>
        <li><NavLink to={`${this.props.match.url}/cast`} className={css.navLink}>Cast</NavLink></li>
        <li><NavLink to={`${this.props.match.url}/reviews`} className={css.navLink}>Reviews</NavLink></li>
        <Route path={`${this.props.match.url}/cast`} render={() => <Cast cast={cast} />} />
        <Route path={`${this.props.match.url}/reviews`} render={() => <Reviews results={results}/>} />
      </ul>
    )
  }
}

export default withRouter(MovieDetailesMore)