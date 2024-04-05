import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({movies}) => {

  
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {Array.isArray(movies) &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>See the datails</Link>
            </li>
          )
        })
          }
      </ul>
    </div>
  )
}

export default MovieList