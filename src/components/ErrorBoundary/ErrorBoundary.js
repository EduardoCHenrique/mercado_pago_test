import React from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ error, errorInfo }) => (
  <div className="error-boundary">
    <h2 className="error-boundary__title">Something went wrong</h2>
    <details className="error-boundary__details">
      {error && error.toString()}
      <br />
      {errorInfo && errorInfo.componentStack}
    </details>
  </div>
);

ErrorBoundary.propTypes = {
  errorInfo: PropTypes.exact({
    componentStack: PropTypes.string.isRequired,
  }).isRequired,
  error: PropTypes.bool.isRequired
};

export default ErrorBoundary;
