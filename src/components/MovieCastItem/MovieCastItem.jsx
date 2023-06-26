import styles from './MovieCastItem.module.css'
function MovieCastItem({ actor }) {
  const { name, character, profile_path: imgUrl } = actor;

  return (
    <div className={styles.actor}>
      <img className={styles.profileImg} src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={`${name} photo`} onError={e => {
          e.target.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/w680/blank-profile-picture-hd-images-photo.JPG"
          e.onerror = null
        }}/>
      <div>
        <h5>{name}</h5>
        <div>{character}</div>
      </div>

    </div>
  )
}

export default MovieCastItem
