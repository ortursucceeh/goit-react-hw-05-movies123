import MovieList from "components/MovieList/MovieList"
import Navbar from "components/Navbar/Navbar"
import styles from './Homepage.module.css'

function Homepage() {
  
  return (
    <div>
      <Navbar />
      <h1 className={styles.header}>Trending Today</h1>
      <MovieList/>
    </div>
  )
}

export default Homepage
