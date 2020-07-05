import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import ProductRepository from 'infra/repositories/ProductRepository';
import Home from './Home';

import './Home.scss';

class HomeState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasPreviousSearch: false,
      products: [],
      showEmptyState: false,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { search = '' } = queryString.parse(location.search);
    if (search) {
      this.getProducts(search);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
    } = this.props;
    const {
      location: { search: oldSearch },
    } = prevProps;
    const searchHasChanged = search !== oldSearch;

    if (searchHasChanged) {
      const searchText = queryString.parse(search);
      this.getProducts(searchText.search || '');
    }
  }

  getProducts(search) {
    this.setState({ loading: true });
    ProductRepository.getProductsBySearch(search).then((products) => {
      this.setState({
        products,
        loading: false,
        showEmptyState: !products.length,
      });
    });
  }

  render() {
    return <Home {...this.state} />;
  }
}

HomeState.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeState;
