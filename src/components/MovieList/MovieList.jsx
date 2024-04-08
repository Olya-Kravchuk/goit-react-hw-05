import React from 'react'
import { Link } from 'react-router-dom'
import css from "./MovieList.module.css"

const MovieList = ({movies}) => {

  
  return (
      
    <ul>
      {Array.isArray(movies) &&
      movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        )
      })
      }
    </ul>
  )
}

export default MovieList