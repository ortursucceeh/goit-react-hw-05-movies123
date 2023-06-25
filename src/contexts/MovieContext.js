// import { API_KEY } from 'config';
import { API_TOKEN } from 'config';
import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  useEffect(function () {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/trending/all/day`, options);
        const data = await res.json();
        setMovies(data.results);
        console.log('data :>> ', data);
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (context === undefined)
    throw new Error('MoviesContext was used outside the provider');
  return context;
}

export { MovieProvider, useMovies };
