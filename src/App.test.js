import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from './App'

describe('App Component', () => {
  const wrapper = shallow(<App />)

  it('should render', () => {
    expect(wrapper.find('.app')).to.have.length(1)
  })
})