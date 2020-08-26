import React, { Component } from 'react'
import MovieDetailesServices from '../../Services/MovieDetailesServices'
import MovieDetailesList from './MovieDetailesList/MovieDetailesList'
import MovieDetailesMore from './MovieDetailesMore/MovieDetailesMore'
import { withRouter } from 'react-router-dom';
import css from './MovieDetailesPage.module.css'



class MovieDetailesPage extends Component {
  state = {
    infoFilm: '',
    search: '',
    pathname:'',
    from: '',
  }


  componentDidMount() {
    this.getInfoAboutFilm();

    this.props.location.state?.from &&
    this.setState({
      from: this.props.location.state.from.pathname,
      search: this.props.location.state.from.search,
    });

  }
  

  getInfoAboutFilm() {
    const id = this.props.match.params.id;
    MovieDetailesServices.getInfoFilms(id).then(data => this.setState({ infoFilm: data }));
  }

  goBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(
        `${this.state.from}${this.state.search}`
      );
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    const { infoFilm } = this.state;
    
    return (
      <section className={css.section}>
        <MovieDetailesList infoFilm={infoFilm} goBack={this.goBack} props={this.props} />
        <MovieDetailesMore infoFilm={infoFilm} />
      </section>

    )
  }
}

export default withRouter(MovieDetailesPage)


