import React from 'react'
import ListHomeItem from './ListHomeItem/ListHomeItem'
import css from './ListHome.module.css'

 const ListHome = ({films}) => {

  return (
    <ul className={css.list}>
      {films.map(trendFilm => <ListHomeItem key={trendFilm.id} trendFilm={trendFilm}/> )}
    </ul>
  )
}

export default ListHome
