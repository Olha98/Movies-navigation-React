import React, { Component } from 'react'
import { Switch, Route, withRouter} from 'react-router-dom';
import Header from './Header/Header';
import HomePage from '../Views/HomePage/HomePage';
import MoviesPage from '../Views/MoviesPage/MoviesPage';
import NotFound from '../Views/NotFound/NotFound';
import MovieDetailesPage from '../Views/MovieDetailesPage/MovieDetailesPage';

 class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <Switch>
       <Route path="/" exact component={HomePage} />
       <Route path="/movies/:id" component={MovieDetailesPage} />
       <Route path="/movies" component={MoviesPage} />
       <Route component={NotFound} />
     </Switch>
     </> 

    )
  }
}


export default withRouter(App)



