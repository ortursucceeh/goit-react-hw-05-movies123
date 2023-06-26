import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "contexts/MoviesContext";
import Homepage from "pages/Homepage/Homepage";
import Movie from "components/Movie/Movie";
import MovieCast from "components/MovieCast/MovieCast";
import MovieReviews from "components/MovieReviews/MovieReviews";
import Navbar from "components/Navbar/Navbar";
import MovieList from "components/MovieList/MovieList";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="movies" element={<Movies />}>
            <Route path="?query=:movie" element={<MovieList />}></Route>
          </Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />}/>
            <Route path="reviews" element={<MovieReviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};
