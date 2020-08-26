import React from 'react'
import css from './MovieDetailesLis.module.css'
import { Link, withRouter } from 'react-router-dom';
import img from '../../../image/a3129d903938eb9c92b1b086dfb82070_135.jpg'


const MovieDetailesList = ({ infoFilm, goBack, props }) => {
  const { backdrop_path, original_title, release_date, overview, popularity, genres } = infoFilm
  const release = String(release_date).substr(0, 4);

  return (
    <>
    <button type='button' onClick={goBack} className={css.goBack}>GO BACK</button>
      <div className={css.container}>
        {backdrop_path ? <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="/" /> :
          <img src={`${img}`} alt="/" width="500" height="350" />}
        <div>
          <h2>{original_title} ({release})</h2>
          <p>User score: {popularity}%</p>
          <p>Overview : {overview}</p>
          <p>Overview : {overview}</p>

          <ul>

            Genres: {(genres && genres.length > 0) ? genres.map(item => (

            <li data-id={item.id} className={css.listItem} key={item.id}>
              <Link to={{
                pathname: `/movies/${item.id}`,
                state: { from: props.locathion }
              }} className={css.link}>
                {item.name}
              </Link>
            </li>))
              : <li className={css.listItem}>Not Faund</li>}
          </ul>
        </div>
      </div>
    </>
  )
}

export default withRouter(MovieDetailesList)