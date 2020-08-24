import React from 'react'
import CastList from './CastList/CastList'


export default function Cast({cast}) {
console.log("cast",cast)

  return (
  <ul>
 {cast.map(castItem=> <CastList key={castItem.cast_id} {...castItem}/>)}
  </ul>
  )
}


