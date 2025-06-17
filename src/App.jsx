// # IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # IMPORT  LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// # IMPORT PAGE
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Movies from "./components/pages/Movies";
import MovieDetalis from "./components/pages/MovieDetails";

// # IMPORT DATA
import pageNav from "./data/pageNav";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={pageNav.HOME} element={<HomePage />} />
            <Route path={pageNav.ABOUT} element={<AboutPage />} />
            <Route path={pageNav.MOVIES} element={<Movies />} />
            <Route path={pageNav.MOVIE_DETAILS} element={<MovieDetalis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
