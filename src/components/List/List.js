import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

import './List.scss';

const renderListItem = (item, index) => <ListItem {...item} key={index} />;

const List = (props) => {
  const { products } = props;
  return !!products.length && <ul className="list">{products && products.map(renderListItem)}</ul>;
};

List.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      picture: PropTypes.string,
      price: PropTypes.number,
      sold_quantity: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

List.defaultProps = {
  products: [],
};

export default List;
