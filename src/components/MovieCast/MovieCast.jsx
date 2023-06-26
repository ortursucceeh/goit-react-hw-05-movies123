import MovieCastItem from "components/MovieCastItem/MovieCastItem";
import Spinner from "components/Spinner/Spinner";
import { useMovies } from "contexts/MoviesContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieCast() {
  const { id } = useParams();
  const { currentMovie, getMovieCast, isCastLoading } = useMovies();
  useEffect(function () {
    getMovieCast(id)
  }, [id])

  if (isCastLoading) return <Spinner />;

  return (
    <div>
      Movie Cast {currentMovie.title}
      {currentMovie.cast && currentMovie.cast.map(actor =>
        <MovieCastItem key={actor.cast_id} actor={actor} />)}
    </div>
  )
}

export default MovieCast
