import Spinner from "components/Spinner/Spinner";
import { useMovies } from "contexts/MoviesContext";
import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import styles from './Movie.module.css'

function Movie() {
  const { id } = useParams()
  const { currentMovie, getMovie, isLoading } = useMovies();

  useEffect(function () {
    getMovie(id)
  }, [])

  const { title, name, original_name: originalName, overview, release_date: releaseDate, poster_path: imgUrl, } = currentMovie;
  // console.log('currentMovie :>> ', currentMovie);
  if (isLoading) return <Spinner /> 

  return (
    <>
    <div>
      <h1 className={styles.title}>{title}</h1>
      {imgUrl && <img className={styles.poster} src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt="img" />}

    </div>

      <Link to='reviews'>Reviews</Link >
      <Link to='credits'>Credits</Link >
      <Outlet />
    </>
  )
}

export default Movie
