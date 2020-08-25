import React from 'react'
import css from './MovieDetailesListItem.module.css'

const MovieDetailesListItem = ({ name }) => {

  return (
    <>
      <li className={css.listItem}>{name}</li>
    </>
  )
}

export default MovieDetailesListItem