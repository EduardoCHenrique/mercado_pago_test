import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({ handleChange, handleSearch, onFocus, inputText }) => {
  const inputRef = useRef();

  useEffect(() => {
    if(inputText !== inputRef.current.value) {
      inputRef.current.value = inputText;
    }
  }, [inputText])


  const blurAndSearch = () => {
    inputRef.current.blur();
    handleSearch();
  }

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      blurAndSearch();
    }
  };

  return (
    <div className='search'>
      <button className="search__button" onClick={blurAndSearch} type="submit">
        <i className="search__icon" />
      </button>
      <input
        type="text"
        className="search__input"
        onChange={() => handleChange(inputRef)}
        onFocus={onFocus}
        onKeyDown={keyPress}
        placeholder="Buscar produtos, marcas e muito mais..."
        ref={inputRef}
        defaultValue={inputText}
      />
    </div>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputText: PropTypes.string
};

Search.defaultProps = {
  inputText: ''
};

export default Search;
