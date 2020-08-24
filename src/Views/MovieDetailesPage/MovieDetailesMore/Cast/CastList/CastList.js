import React from 'react'


export default function CastList({ backdrop_path, name }) {

  return (

    <li>
      <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      <h3><p>{name}</p></h3>
    </li>

  )
}
