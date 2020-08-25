import React from 'react'
import CastList from './CastList/CastList'
import css from './Cast.module.css'


export default function Cast({cast}) {

  return (
  <ul className={css.list}>
 {cast.map(castItem=> <CastList key={castItem.cast_id} {...castItem}/>)}
  </ul>
  )
}


