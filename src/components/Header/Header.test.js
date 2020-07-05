import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Search from 'components/Search';
import { stub } from 'sinon';

import { Header } from './Header';

const props = {
  history: {
    replace: stub(),
  }
};

describe('Header Component', () => {
  const wrapper = shallow(<Header {...props} />);
  wrapper.debug();
  it('should render', () => {
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('should render the Search Component', () => {
    expect(wrapper.find(Search)).to.have.length(1);
  });

  it('should render ML Logo', () => {
    expect(wrapper.find('.header__logo')).to.have.length(1);
  });
});
