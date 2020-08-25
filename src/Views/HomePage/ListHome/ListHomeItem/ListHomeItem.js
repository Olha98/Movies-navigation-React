import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import css from './ListHomeItem.module.css'

const ListHomeItem = (props) => {
  const { trendFilm: { title, original_name, backdrop_path, id }, match } = props
  console.log("title", title)
  return (
    <li data-id={id} className={css.listItem}>
      <Link to={`/movies/${id}`} className={css.link}>{title ? title : original_name}</Link>
    </li>
  )
}

export default withRouter(ListHomeItem)