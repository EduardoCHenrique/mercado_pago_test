import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Home from './Home'

describe('Home Component', () => {
  const wrapper = shallow(<Home />)

  it('should render', () => {
    expect(wrapper.find('.home')).to.have.length(1)
  })
})