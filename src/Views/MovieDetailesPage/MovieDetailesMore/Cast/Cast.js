import React from 'react'


export default function Cast({cast}) {
console.log("cast",cast)

  return (
  <ul>
    {cast.map(item=> <li>
    <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
    <p>item.name</p>
       </li>}
  </ul>
  )
}


