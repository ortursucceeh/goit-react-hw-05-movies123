import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "contexts/MoviesContext";
import Homepage from "pages/Homepage/Homepage";
import Movie from "components/Movie/Movie";
import MovieCast from "components/MovieCast/MovieCast";
import MovieReviews from "components/MovieReviews/MovieReviews";

export const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:id" element={<Movie />}>
            <Route path="credits" element={<MovieCast />}/>
            <Route path="reviews" element={<MovieReviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};
