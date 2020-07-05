import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ErrorBoundaryState from './ErrorBoundary.state';

function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; // eslint-disable-line
}

describe('<ErrorBoundaryState> window', () => {
  it('displays error message on error generated by child', () => {
    sinon.spy(ErrorBoundaryState.prototype, 'componentDidCatch');

    mount(
      <ErrorBoundaryState>
        <ProblemChild />
      </ErrorBoundaryState>
    );
    expect(ErrorBoundaryState.prototype.componentDidCatch).to.have.property('callCount', 1);
  });
});
