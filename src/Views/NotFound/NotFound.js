import React from 'react'
import gif404 from '../../image/404 (1).gif'
import css from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className={css.section_NotFound}>
    <img src={gif404} alt="/" width="500"/>
    <h2>Look like you're lost...</h2>
    <p>The page you are looking for not avaible!</p>
    <button><Link to='/' className={css.Link_NotFound}>Go to Home</Link></button>
    </section>
  )
}