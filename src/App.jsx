
import { NavLink, Route, Routes } from 'react-router-dom'
import css from "./App.module.css"

import HomePage from "./page/HomePage"
import MoviesPage from "./page/MoviesPage"
import NotFoundPage from './page/NotFoundPage';
import MovieDetailsPage from './page/MovieDetailsPage';

import clsx from "clsx";





const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
function App() {
  
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">HomePage</NavLink>
          <NavLink className={getNavLinkClassName} to="/movies">MoviesPage</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/movies' element={<MoviesPage/>} />
          <Route path='' element={<MovieDetailsPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
