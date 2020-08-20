import React from 'react'
import ListHomeItem from './ListHomeItem/ListHomeItem'

 const ListHome = ({trendFilms}) => {

  
  return (
    <ul>
      {trendFilms.map(trendFilm => <ListHomeItem key={trendFilm.id} trendFilm={trendFilm}/> )}
    </ul>
  )
}

export default ListHome
