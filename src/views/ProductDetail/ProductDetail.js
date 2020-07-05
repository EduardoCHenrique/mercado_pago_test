import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/Button';
import Loader from 'components/Loader';

import './ProductDetail.scss';

const ProductContent = ({ description, picture, price, sold_quantity, title }) => (
  <div className="product-detail">
    <div className="product-detail__info">
      <figure className="product-detail__figure">
        <img className="product-detail__img" src={picture} alt={title} />
      </figure>
      <div className="product-detail__main-info">
        <span className="product-detail__small-info">{sold_quantity} Vendidos</span>
        <h1 className="product-detail__title">{title}</h1>
        <span className="product-detail__price">R$ {price}</span>
        <Button className="product-detail__button">Comprar</Button>
      </div>
    </div>
    <div className="product-detail__description-wrapper">
      <h3 className="product-detail__description-title">Descrição do Produto</h3>
      <p className="product-detail__description"> {description} </p>
    </div>
  </div>
);

const ProductDetail = ({ loading, ...rest }) => (
  <div className={classNames('product-detail__view', { 'product-detail__view--loading': loading })}>
    {loading ? <Loader /> : <ProductContent {...rest} />}
  </div>
);

ProductDetail.propTypes = {
  loading: PropTypes.bool.isRequired
};

ProductContent.propTypes = {
  description: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
  sold_quantity: PropTypes.number,
  title: PropTypes.string,
};

ProductContent.defaultProps = {
  description: '',
  picture: '',
  price: 0,
  sold_quantity: 0,
  title: '',
}

export default ProductDetail;
