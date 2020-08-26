import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Spinner from './Loader/Loader'
import routes from '../routes'
import css from './App.module.css'

const Header = lazy(() => import('./Header/Header'));
const HomePage = lazy(() => import('../Views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../Views/MoviesPage/MoviesPage'));
const NotFound = lazy(() => import('../Views/NotFound/NotFound'));
const MovieDetailesPage = lazy(() => import('../Views/MovieDetailesPage/MovieDetailesPage'));

class App extends Component {

  getLoading = () => {
    return <div className={css.loading}><Spinner/></div>
  }

  render() {
    return (
      <>
        <Suspense fallback={this.getLoading()}>
          <Header />
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies_id} component={MovieDetailesPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    )
  }
}


export default withRouter(App)



