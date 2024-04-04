import MovieList from '../components/MovieList/MovieList'
import Loader from "../components/Loader/Loader"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import SearchForm from "../components/SearchForm/SearchForm"
import { useMovieSearch } from '../hooks/useMovieSearch'

const MoviesPage = () => {

  const {movies, loading, error, onSetSearchQuery} = useMovieSearch()



  return (
    <div>
      <SearchForm onSubmit={onSetSearchQuery}/>
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {movies && <MovieList movies={movies}/>}
    </div>
  )
}

export default MoviesPage