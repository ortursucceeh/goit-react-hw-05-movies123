import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom"

import { useMovies } from "contexts/MoviesContext";
import Spinner from "components/Spinner/Spinner";
import styles from './Movie.module.css'


function Movie() {
  const { id } = useParams()
  const { currentMovie, getMovie, isLoading } = useMovies();

  useEffect(function () {
    getMovie(id)
  }, [])

  const { title,
    name,
    original_name: originalName,
    overview,
    release_date: releaseDate,
    poster_path: imgUrl,
    vote_average: score,
    vote_count: scoreCount,
    genres,
    success,
    status_message: message
  } = currentMovie;

  if (isLoading) return <Spinner /> 

  if (success === false) return <h2>{message }</h2>
  return (
    <div className={styles.moviePage}>
      <div className={styles.movie}>
        <div className={styles.poster}>
          {imgUrl && <img className={styles.poster} src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt="img" />}
        </div>
        <div className={styles.movieInfo}>
          <h2 className={styles.title}>{title || name || originalName} ({releaseDate?.slice(0, 4)})</h2>
          <span className={styles.rating}><h4>Rating</h4>⭐{score} ({scoreCount} votes)</span>
          <div className={styles.overview}>
            <h4>Overview</h4>
            {overview}
          </div>
          {genres && <div className={styles.genres}>
            {<>
              <h4>Genres</h4>
              <ul>{genres.map(genre =>
                <li key={genre.id}>{genre.name}</li>)}
              </ul>
            </>}
          </div>}
          <h4>Additional info</h4>
          <div className={styles.additional}>
            <Link to='reviews'>Reviews</Link >
            <Link to='cast'>Cast</Link >
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Movie
