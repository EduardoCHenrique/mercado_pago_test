import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import './EmptyState.scss'

const EmptyState = (props) => {
  const { className } = props
  return (
    <div className={classNames("empty-state", className)}>
      <h3 className="empty-state__icon">=/</h3>
      <p className="empty-state__text">Não há resultados para esta busca.</p>
    </div>
  )
}

EmptyState.propTypes = {
  className: PropTypes.string
}

EmptyState.defaultProps = {
  className: ''
}

export default EmptyState
