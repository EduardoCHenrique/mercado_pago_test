import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary';

class ErrorBoundaryState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (errorInfo) {
      return <ErrorBoundary error={error} errorInfo={errorInfo} />;
    }

    return children;
  }
}

ErrorBoundaryState.propTypes = {
  children: PropTypes.node,
};

ErrorBoundaryState.defaultProps = {
  children: null,
};

export default ErrorBoundaryState;
