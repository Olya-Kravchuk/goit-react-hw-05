import React from 'react'

const MovieList = ({movies}) => {

  
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {Array.isArray(movies) &&
        movies.map(movie => {
          return (
            <li key={movie.id}></li>
          )
        })
          }
      </ul>
    </div>
  )
}

export default MovieList