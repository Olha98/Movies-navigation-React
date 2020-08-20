import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
  
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" className="link" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/movies" className="link" activeClassName="active-link">Movies</NavLink></li>
        </ul>
      </nav>
    </header>
   
  )
}