import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import HomePage from '../Views/HomePage/HomePage';
import MoviesPage from '../Views/MoviesPage/MoviesPage';
import NotFound from '../Views/NotFound/NotFound';

export default class App extends Component {
  render() {
    return (
      <>
       <Header/>
       <Switch>
       <Route path="/home" exact component={HomePage} />
       <Route path="/movies" component={MoviesPage} />
       <Route component={NotFound} />
     </Switch>
     </> 

    )
  }
}



