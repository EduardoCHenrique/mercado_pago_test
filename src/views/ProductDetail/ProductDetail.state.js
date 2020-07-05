import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductRepository from 'infra/repositories/ProductRepository';

import ProductDetail from './ProductDetail';

class ProductDetailState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const id = location.pathname.split('/')[2];

    ProductRepository.getProductDetail(id).then((product) => {
      this.setState({ loading: false, product });
    });
  }

  // componentDidUpdate(prevProps) {
  //   const { history, search } = this.props;
  //   if (prevProps.search !== search) {
  //     history.push({ pathname: '/', search: `?search=${search}` });
  //   }
  // }

  render() {
    const { loading, product } = this.state;
    return <ProductDetail loading={loading} {...product} />;
  }
}

ProductDetailState.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductDetailState;
