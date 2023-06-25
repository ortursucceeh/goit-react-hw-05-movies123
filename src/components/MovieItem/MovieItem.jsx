import styles from './MovieItem.module.css'

function MovieItem({ movie }) {
  return (
    <li className={styles.item}>
      <span>{movie.title || movie.name || movie.original_name}</span>
    </li>
  )
}

export default MovieItem
