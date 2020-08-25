import React, { Component } from 'react'
import { Switch, Route, withRouter} from 'react-router-dom';
import Header from './Header/Header';
import HomePage from '../Views/HomePage/HomePage';
import MoviesPage from '../Views/MoviesPage/MoviesPage';
import NotFound from '../Views/NotFound/NotFound';
import MovieDetailesPage from '../Views/MovieDetailesPage/MovieDetailesPage';
import routes from '../routes'

 class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <Switch>
       <Route path={routes.home} exact component={HomePage} />
       <Route path={routes.movies_id} component={MovieDetailesPage} />
       <Route path={routes.movies} component={MoviesPage} />
       <Route component={NotFound} />
     </Switch>
     </> 
    )
  }
}


export default withRouter(App)



