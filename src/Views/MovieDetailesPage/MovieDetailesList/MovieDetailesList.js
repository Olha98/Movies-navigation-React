import React from 'react'
import css from './MovieDetailesLis.module.css'
import { Link, withRouter } from 'react-router-dom';
// import MovieDetailesListItem from './MovieDetailesListItem/MovieDetailesListItem';

const MovieDetailesList = ({ infoFilm, goBack, props }) => {


  const { backdrop_path, original_title, release_date, overview, popularity, genres } = infoFilm
  const release = String(release_date).substr(0, 4);
  console.log(props, "props")
  return (
    <>
     
      <div className={css.container}>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="/" />
        <div>
          <h2>{original_title} ({release})</h2>
          <p>User score: {popularity}%</p>
          <p>Overview : {overview}</p>
          <p>Overview : {overview}</p>

          <ul>
            {/* Genres: {genres && genres.map(item => <MovieDetailesListItem key={item.id} {...item} />)} */}
            Genres: {genres && genres.map(item => (
              <li data-id={item.id} className={css.listItem} key={item.id}>
                <Link to={{
                  pathname: `/movies/${item.id}`,
                  state: { from: props.locathion }
                }} className={css.link}>{item.title ? item.title : item.original_name}
                </Link>
              </li>))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default withRouter(MovieDetailesList)