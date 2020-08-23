import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MovieDetailesServices from '../../Services/MovieDetailesServices'
import MovieDetailesList from './MovieDetailesList/MovieDetailesList';
import MovieDetailesMore from './MovieDetailesMore/MovieDetailesMore';


class MovieDetailesPage extends Component {
  state = {
    infoFilm: '',
  }


  componentDidMount() {
    this.getInfoAboutFilm();
  }



  getInfoAboutFilm() {
    const id = this.props.match.params.id;
    MovieDetailesServices.getInfoFilms(id).then(data => this.setState({ infoFilm: data }));
  }

  render() {
    const { infoFilm } = this.state;
    return (
      <section>
        <button>GO BACK</button>
        <MovieDetailesList infoFilm={infoFilm} />
        <MovieDetailesMore infoFilm={infoFilm} />
      </section>

    )
  }
}

export default withRouter(MovieDetailesPage)


// {/* <Link to={{
//     pathname: `/Cast/${id}`,
//     state: { from: this.props.location },
//   }}>Cast</Link>

// <Link to={{
//     pathname: `/Reviews/${id}`,
//     state: { from: this.props.location },
//   }}>Reviews</Link>
// </> */}
