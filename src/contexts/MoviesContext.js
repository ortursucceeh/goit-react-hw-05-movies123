// import { API_KEY } from 'config';
import { API_TOKEN } from 'config';
import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCastLoading, setIsCastLoading] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

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
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  async function getMovie(id) {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/movie/${id}`, options);
        const data = await res.json();
        setCurrentMovie(data);
        console.log('movie :>> ', data);
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }

  async function getMovieCast(id) {
    async function fetchMovieCast() {
      try {
        setIsCastLoading(true);
        const res = await fetch(`${BASE_URL}/movie/${id}/credits`, options);
        const data = await res.json();
        console.log('data :>> ', data);
        setCurrentMovie(currentMovie => ({ ...currentMovie, cast: data.cast }));
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsCastLoading(false);
      }
    }
    fetchMovieCast();
  }

  async function getMovieReviews(id) {
    async function fetchMovieCast() {
      try {
        setIsCastLoading(true);
        const res = await fetch(`${BASE_URL}/movie/${id}/reviews`, options);
        const data = await res.json();
        console.log('data :>> ', data);
        setCurrentMovie(currentMovie => ({
          ...currentMovie,
          reviews: data.results,
        }));
      } catch (err) {
        alert('There was an error loading data...');
      } finally {
        setIsCastLoading(false);
      }
    }
    fetchMovieCast();
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        isCastLoading,
        currentMovie,
        getMovie,
        getMovieCast,
        getMovieReviews,
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
