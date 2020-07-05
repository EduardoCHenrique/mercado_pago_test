import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

export const SIZES = {
  MEDIUM: 'medium'
}

const Button = (props) => {
  const { children, className, size, ...rest } = props
  return <button className={classNames(`button button--${size}`, className)} {...rest}>{children}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

Button.defaultProps = {
  size: SIZES.MEDIUM,
  className: ''
}

export default Button
