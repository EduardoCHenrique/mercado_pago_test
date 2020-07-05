import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({ handleChange, search = '', handleSearch, toggleFocus }) => {
  const keyPress = (e) => {
    if(e.keyCode === 13){
      handleSearch();
    }
  }

  return (
    <div className="search">
      <button className="search__button" onClick={handleSearch} type="submit">
        <i className="search__icon" />
      </button>
      <input
        type="text"
        className="search__input"
        onChange={handleChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        value={search}
        onKeyDown={keyPress}
        placeholder="Buscar produtos, marcas e muito mais..."
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  toggleFocus: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string,
};

Search.defaultProps = {
  search: '',
};

export default Search;
