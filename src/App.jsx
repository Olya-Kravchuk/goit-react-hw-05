
import { Route, Routes } from 'react-router-dom'
// import css from "./App.module.css"

import Navigation from './components/Navigation/Navigation';
import HomePage from "./page/HomePage"
import MoviesPage from "./page/MoviesPage"
import NotFoundPage from './page/NotFoundPage';
import MovieDetailsPage from './page/MovieDetailsPage';



function App() {
  
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/movies' element={<MoviesPage/>} />
          <Route path='/movies/:movieId/*' element={<MovieDetailsPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
