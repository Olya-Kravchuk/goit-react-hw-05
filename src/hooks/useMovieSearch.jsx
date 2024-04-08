import React, { useEffect, useState } from 'react'
import { fetchTrendingMovies, searchMoviesByName } from '../services/api';

export const useMovieSearch = ({ isMoviesPage = false }) => {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if(isMoviesPage) return;
    async function feachData() {
      try {
        setLoading(true)
        setError(false);
        const data = await fetchTrendingMovies()
        setMovies(data)
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false)
      }
    }
    feachData()
  }, [])

  useEffect(() => {
    if (!query)
    return
    async function feachMovies() {
      try {
        setLoading(true)
        const data = await searchMoviesByName(query)
        setMovies(data)
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false)
      }
      
      
    }
    feachMovies()
  
  }, [query])

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm)
  }
  return { movies, loading, error, onSetSearchQuery }
}

