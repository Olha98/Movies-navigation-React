import React from 'react'
import css from './CastList.module.css'
import img from '../../../../../image/unnamed.png'

export default function CastList({ profile_path, name }) {
  return (

    <li className={css.listItemCast}>
      {profile_path? <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="/" className={css.listImage} /> : <img src={`${img}` }  alt="/"  className={css.listImage} />}
      {name && <p>{name}</p>}
    </li>

  )
}
