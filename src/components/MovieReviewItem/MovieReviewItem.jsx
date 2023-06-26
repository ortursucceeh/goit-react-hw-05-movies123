import { formatDate } from "functions";

function MovieReviewItem({ review }) {

  const { author, content, created_at: created } = review;

  return (
    <li>
      <h3>{author}</h3>
      <h6>{formatDate(created || null)}</h6>
      <div>{content }</div>
    </li>
  )
}

export default MovieReviewItem
