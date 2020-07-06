import React from 'react';
import PropTypes from 'prop-types';

import './SearchListItem.scss';

const SearchListItem = props => {
  const { handleSelect, value } = props;

  return (
    <li className="search-list-item" onClick={() => handleSelect(value)}>
      {value}
    </li>
  );
};

SearchListItem.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchListItem;
