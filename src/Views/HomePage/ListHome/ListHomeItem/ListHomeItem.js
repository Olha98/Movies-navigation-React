import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const ListHomeItem =(props) =>{
  const {trendFilm:{title, original_name, id}, match} = props

  return (
 <li data-id={id}>
    <Link to={`/movies/${id}`}>{title ? title: original_name}</Link>
   </li>
  )
}

export default withRouter(ListHomeItem)