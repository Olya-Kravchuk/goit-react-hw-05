import { Link, Route, Routes, useLocation } from "react-router-dom";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import MovieCast from "../../components/MovieCast/MovieCast";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import { useDetailsSearch } from "../../hooks/useDetailsSearch";
import { useRef } from "react";

const MovieDetailsPage = () => {
  const { loading, error, movieData, imageUrl, defaultImg } =
    useDetailsSearch();

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Link to={backLinkRef.current}>Go back</Link>
      {movieData && (
        <>
          <div className={css.movieContainer}>
            <img
              className={css.movieImg}
              src={
                movieData.poster_path
                  ? `${imageUrl}${movieData.poster_path}`
                  : defaultImg
              }
              width={250}
              alt={movieData.original_title}
            />
            <div className={css.movieDetails}>
              <h2>{movieData.title}</h2>
              <p>{`User Score: ${Math.round(movieData.vote_average * 10)}%`}</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <p>{movieData.genres.map((genre) => genre.name).join(" ")}</p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <Link className={css.linkDetails} to="cast">
              Casts
            </Link>
            <Link className={css.linkDetails} to="reviews">
              Reviews
            </Link>
            <Routes>
              <Route path="/cast" element={<MovieCast />} />
              <Route path="/reviews" element={<MovieReviews />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
