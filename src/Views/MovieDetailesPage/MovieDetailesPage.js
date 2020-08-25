import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MovieDetailesServices from '../../Services/MovieDetailesServices'
import MovieDetailesList from './MovieDetailesList/MovieDetailesList';
import MovieDetailesMore from './MovieDetailesMore/MovieDetailesMore';
import css from './MovieDetailesPage.module.css'



class MovieDetailesPage extends Component {
  state = {
    infoFilm: '',
    search: '',
    from: '',
  }


  componentDidMount() {
    this.getInfoAboutFilm();
   console.log( this.props.location.state,  'this.props.location.state')
    this.props.location.state?.from &&
      this.setState({
        search: this.props.location.state.from.search,
        from: this.props.location.state.from.pathname,
      });
     
  }



  getInfoAboutFilm() {
    const id = this.props.match.params.id;
    MovieDetailesServices.getInfoFilms(id).then(data => this.setState({ infoFilm: data }));
  }

  goBack = () => {
    console.log("back")
    // this.props.history.push(`/`)
    this.props.history.push(`${this.state.from}${this.state.search}`);
  }

  render() {
    const { infoFilm } = this.state;
    
    return (
      <section className={css.section}>
       <button type='button' onClick={this.goBack} className={css.goBack}>GO BACK</button>
        <MovieDetailesList infoFilm={infoFilm} goBack={this.goBack} props={this.props} />
        <MovieDetailesMore infoFilm={infoFilm} />
      </section>

    )
  }
}

export default withRouter(MovieDetailesPage)


