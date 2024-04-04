import MovieList from '../components/MovieList/MovieList'
import Loader from "../components/Loader/Loader"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import { useMovieSearch } from '../hooks/useMovieSearch'

const HomePage = () => {
  const {movies, loading, error} = useMovieSearch()


  

  return (
    <div>
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {movies && <MovieList movies={movies}/>}

    </div>
  )
}

export default HomePage