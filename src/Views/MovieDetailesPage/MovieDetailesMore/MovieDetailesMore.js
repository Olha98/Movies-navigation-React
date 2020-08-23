import React, { Component } from 'react'
import { NavLink, withRouter, Route } from 'react-router-dom'
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'
import services from '../../../Services/creditsServices'



class MovieDetailesMore extends Component {
  state = {
    idFilm: '',
    cast:[]
  }

  
  componentDidMount() {
    this.getCast()
  }

  getCast() {
    const id = this.props.match.params.id;
    services.getCredits(id).then(({cast}) => this.setState({cast}))

  }

  render() {
    const { infoFilm, cast } = this.props;
    return (
      <ul>
        <h3>Additional information</h3>
        <li><NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink></li>
        <li><NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink></li>
        <Route path={`${this.props.match.url}/cast`} render={(props) => <Cast {...cast}/>} />
        <Route path={`${this.props.match.url}/reviews`} render={() => <Reviews />} />
      </ul>
    )
  }
}

export default withRouter(MovieDetailesMore)