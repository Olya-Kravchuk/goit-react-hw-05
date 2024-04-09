import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
// import css from "./App.module.css"

// import Navigation from './components/Navigation/Navigation';
// import HomePage from "./page/HomePage"
// import MoviesPage from "./page/MoviesPage"
// import NotFoundPage from './page/NotFoundPage';
// import MovieDetailsPage from './page/MovieDetailsPage/MovieDetailsPage';
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./page/HomePage"));
const MoviesPage = lazy(() => import("./page/MoviesPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("./page/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
