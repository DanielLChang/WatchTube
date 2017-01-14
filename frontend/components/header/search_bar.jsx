import React from 'react';
import { Link } from 'react-router';

const SearchBar = () => (
  <div className="searchbar-nav">
      <input
        className="search-input-text"
        type="text"
        placeholder="Search"/>

    <i className="fa fa-search" aria-hidden="true"></i>
  </div>
);

export default SearchBar;
