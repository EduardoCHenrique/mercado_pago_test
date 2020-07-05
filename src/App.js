import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header';
import store from 'state/store';
import Routes from './routes';
import 'styles/index.scss';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<h2>Loading</h2>}>
        <Router>
          <ErrorBoundary>
            <div className="app">
              <Header />
              <Routes />
            </div>
          </ErrorBoundary>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
