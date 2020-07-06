import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { assert, stub } from 'sinon'

import Search from './Search'

describe('Search Component', () => {
  const props = {
    handleChange: stub(), 
    search: stub(),
    handleSearch: stub(),
    onFocus: stub()
  }

  const wrapper = shallow(<Search {...props} />)

  it('should render', () => {
    expect(wrapper.find('.search')).to.have.length(1)
  })

  it('should render an input', () => {
    expect(wrapper.find('.search__input')).to.have.length(1)
  })

  it('should call handleChange when changing input value manualy', () => {
    wrapper.find('.search__input').simulate('change')
    assert.calledOnce(props.handleChange)    
  })
})