import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import 'styles/index.scss';

storiesOf('ErrorBoundary', module).add('ErrorBoundary props', () => {
  return (
    <ErrorBoundary
      error={new Error('Error: Error thrown from problem child')}
      errorInfo={{
        componentStack:
          'in Header (created by Context.Consumer) in withRouter(Header) (at App.js:17) in div (at App.js:16) in ErrorBoundaryState (at App.js:15) in Router (created by BrowserRouter) in BrowserRouter (at App.js:14) in Suspense (at App.js:13) in Provider (at App.js:12) in App (at src/index.js:5)',
      }}
    />
  );
});
