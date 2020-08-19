import React, { Component } from 'react'
import ListHome from './ListHome/ListHome'
import homeServices from '../../Services/homeServices'

 class HomePage extends Component {
  state = {
    trendFilms: [],
  }

  componentDidMount(){
    this.getTrending()
  }

  getTrending=()=>{
  const {trendFilms} = this.state;

  homeServices.getTrendingFilms().then(data=> this.setState({trendFilms:data}))

  } 

  aaccca=()=>{
   console.log("aaccca")
    }


  render() {
    return (
      <section>
        <h2>Trending today</h2>
        <ListHome />
      </section>
    )
  }
}
export default HomePage