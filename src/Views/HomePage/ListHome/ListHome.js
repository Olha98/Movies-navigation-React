import React from 'react'
import ListHomeItem from './ListHomeItem/ListHomeItem'


 const ListHome = ({films}) => {

  
  return (
    <ul>
      {films.map(trendFilm => <ListHomeItem key={trendFilm.id} trendFilm={trendFilm}/> )}
    </ul>
  )
}

export default ListHome
