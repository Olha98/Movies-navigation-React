import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MovieDetailesServices from '../../Services/MovieDetailesServices'
import MovieDetailesList from './MovieDetailesList/MovieDetailesList';
import MovieDetailesMore from './MovieDetailesMore/MovieDetailesMore';
import css from './MovieDetailesPage.module.css'



class MovieDetailesPage extends Component {
  state = {
    infoFilm: '',
  }


  componentDidMount() {
    console.log()
    this.getInfoAboutFilm();
  }



  getInfoAboutFilm() {
    const id = this.props.match.params.id;
    MovieDetailesServices.getInfoFilms(id).then(data => this.setState({ infoFilm: data }));
  }

  goBack=()=>{
// this.props.history.push(`${this.state.from}`)
  }

  render() {
    const { infoFilm } = this.state;
    return (
      <section className={css.section}>
        <button onClick={this.goBack} className={css.goBack}>GO BACK</button>
        <MovieDetailesList infoFilm={infoFilm} />
        <MovieDetailesMore infoFilm={infoFilm} />
      </section>

    )
  }
}

export default withRouter(MovieDetailesPage)


