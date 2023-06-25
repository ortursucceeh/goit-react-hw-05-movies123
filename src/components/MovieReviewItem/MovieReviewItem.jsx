const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

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
