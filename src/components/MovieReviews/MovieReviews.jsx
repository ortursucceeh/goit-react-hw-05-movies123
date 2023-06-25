import MovieReviewItem from "components/MovieReviewItem/MovieReviewItem";
import Spinner from "components/Spinner/Spinner";
import { useMovies } from "contexts/MoviesContext"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieReviews() {
  const { id } = useParams();
  const { currentMovie, getMovieReviews, isCastLoading } = useMovies();

  useEffect(function () {
    getMovieReviews(id)
  }, [id])

  if (isCastLoading) return <Spinner />;

  const {reviews, title} = currentMovie
  return (
    <div>
      <h3>Reviews  for {title}</h3>
      {reviews.length > 0
        ? (<ul>{reviews.map(review => <MovieReviewItem key={review.id} review={review}/>)}</ul>)
        : <strong>There is no review yet!</strong>}
    </div>
  )
}

export default MovieReviews
