import React from 'react'
import css from './MovieDetailesLis.module.css'
import MovieDetailesListItem from './MovieDetailesListItem/MovieDetailesListItem';

const MovieDetailesList = ({ infoFilm }) => {
  const { backdrop_path, original_title, release_date, overview, popularity, genres } = infoFilm
  const release = String(release_date).substr(0, 4);
  return (
    <>
      <div className={css.container}>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
        <div>
          <h2>{original_title} ({release})</h2>
          <p>User score: {popularity}%</p>
          <p>Overview : {overview}</p>
          <p>Overview : {overview}</p>

          <ul>
            Genres: {genres && genres.map(item => <MovieDetailesListItem key={item.id} {...item} />)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MovieDetailesList