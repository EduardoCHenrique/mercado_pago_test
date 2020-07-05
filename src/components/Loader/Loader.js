import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import './Loader.scss'

const Loader = (props) => {
  const { className } = props
  return <div className={classNames(`loader`, className)} />
}

Loader.propTypes = {
  className: PropTypes.string,
}

Loader.defaultProps = {
  className: '',
}

export default Loader
