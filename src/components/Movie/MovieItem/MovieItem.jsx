import { Link } from 'react-router-dom'
import styles from './MovieItem.module.css'

function MovieItem({ movie }) {
  const { id, title, name, original_name: originalName } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <li className={styles.item}>
        <span>{title || name || originalName}</span>
      </li>
    </Link>
  )
}

export default MovieItem
