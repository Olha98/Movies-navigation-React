import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from '../../routes'
import css from './Header.module.css'


export default function Header() {
  return (

    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li><NavLink to={routes.home} className={css.listItem}>Home</NavLink></li>
          <li><NavLink to={routes.movies} className={css.listItem}>Movies</NavLink></li>
        </ul>
      </nav>
    </header>

  )
}