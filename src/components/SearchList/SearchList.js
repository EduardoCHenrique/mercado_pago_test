import React from 'react';
import PropTypes from 'prop-types';

import SearchListItem from 'components/SearchListItem';

import './SearchList.scss';

const getLast5Filtered = (list, inputText) => {
  const filteredList = list.filter(item => item.includes(inputText))
  return filteredList.slice(0).slice(-5)
};

const SearchList = (props) => {
  const { list, handleSelect, inputText } = props;

  const renderSearchListItem = (item, index) => <SearchListItem value={item} key={`${item}-${index}`} handleSelect={handleSelect} />;

  return !!list.length && <ul className="search-list">{getLast5Filtered(list, inputText).map(renderSearchListItem)}</ul>;
};

SearchList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func.isRequired,
  inputText: PropTypes.string
};

SearchList.defaultProps = {
  list: [],
  inputText: ''
};

export default SearchList;
