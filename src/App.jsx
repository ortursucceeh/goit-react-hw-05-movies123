import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "contexts/MovieContext";
import Homepage from "pages/Homepage/Homepage";

export const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
};
