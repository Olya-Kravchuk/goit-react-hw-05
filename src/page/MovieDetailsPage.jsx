import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import MovieReviews from '../components/MovieReviews/MovieReviews'
import MovieCast from '../components/MovieCast/MovieCast'

const MovieDetailsPage = () => {

  const {movieId} = useParams()

  return (
    <div>
      <Link to=""></Link>
      
      <Link to=""></Link>
      <Routes>
      <Route path="" element={<MovieCast/>} />
      <Route path="" element={<MovieReviews/>} />
      </Routes>
    </div>
  )
}

export default MovieDetailsPage