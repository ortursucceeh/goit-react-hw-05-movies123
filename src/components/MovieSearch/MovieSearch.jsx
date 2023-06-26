import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './MovieSearch.module.css'
import { useMovies } from 'contexts/MoviesContext';
import MovieSearchList from './MovieSearchList/MovieSearchList';

function MovieSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchMovie, searchMovies } = useMovies();

  const query = searchParams.get('query');

  useEffect(function () {
    if (query) {
      setSearchValue(query)
      searchMovie(query);
    }
  }, [searchParams, query])

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: searchValue })
  }

  return (
    <div className={styles.searchPage}>
      <form className={ styles.form} onSubmit={handleSubmit}>
        <label htmlFor="search" className={styles.label}>Search movie</label>
        <input id="search" className={styles.input} type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button type="submit" className={styles.button}>Search</button>
      </form>
      { query && searchMovies.length > 0 && <MovieSearchList/>}
    </div>
    
  )
}


export default MovieSearch
