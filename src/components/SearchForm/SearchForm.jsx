import React, { useState } from 'react';
import css from './SearchForm.module.css'

const SearchForm = ({ onSubmit }) => {

  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const query = value.trim();
    if (!query.length) {
      return;
    }
    onSubmit(query);
  };


  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit" >Search</button>
      </form>
  )
}

export default SearchForm