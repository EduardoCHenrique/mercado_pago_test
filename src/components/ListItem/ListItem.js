import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ListItem.scss'

const ListItem = (props) => {
  const { picture, title, price, id, free_shipping } = props
  return (
    <div className="list-item">
      <Link to={`/item/${id}`}>
        <img src={picture} className="list-item__picture" alt="text"/>
      </Link>
      <div className="list-item__info">
        <Link to={`/item/${id}`}>
          <span className="list-item__price">R$ {price}</span>
          {free_shipping && <i className="list-item__shipping-icon" />}
        </Link>
        <h2 className="list-item__title">{title}</h2>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  free_shipping: PropTypes.string.isRequired,
}

export default ListItem
