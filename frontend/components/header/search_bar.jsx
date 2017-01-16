import React from 'react';
import { Link } from 'react-router';

const SearchBar = () => (
  <nav className="searchbar-nav">
    <div className="searchbar-container">
      <label>
        <input
          className="search-input-text"
          type="text"
          placeholder="Search"/>
      </label>
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
    <ul className="search-videos">

    </ul>
  </nav>
);

export default SearchBar;
