import React, { Component, lazy, Suspense } from 'react'
import MovieDetailesServices from '../../Services/MovieDetailesServices'
import { withRouter } from 'react-router-dom';
import Spinner from '../../Components/Loader/Loader'
import style from '../../Components/Loader/Loader.module.css'
import css from './MovieDetailesPage.module.css'

const MovieDetailesList = lazy(() => import('./MovieDetailesList/MovieDetailesList'));
const MovieDetailesMore = lazy(() => import('./MovieDetailesMore/MovieDetailesMore'));


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
  
  getLoading = () => {
    return <div className={style.loading}><Spinner/></div>
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
        <Suspense fallback={this.getLoading()}>
        <MovieDetailesList infoFilm={infoFilm} goBack={this.goBack} props={this.props} />
        <MovieDetailesMore infoFilm={infoFilm} />
        </Suspense>
      </section>

    )
  }
}

export default withRouter(MovieDetailesPage)


