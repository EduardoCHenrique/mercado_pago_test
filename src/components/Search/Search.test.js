import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { assert, stub } from 'sinon'

import Search from './Search'

describe('Search Component', () => {
  const props = {
    handleChange: stub(), 
    search: stub(),
    handleSearch: stub()
  }

  const wrapper = shallow(<Search {...props} />)

  it('should render', () => {
    expect(wrapper.find('.search')).to.have.length(1)
  })

  it('should render an input', () => {
    expect(wrapper.find('.search__input')).to.have.length(1)
  })

  it('should render and input passing handleChange, value and onKeyDown props ', () => {
    expect(wrapper.find('.search__input').props().onChange).to.equal(props.handleChange)
    expect(wrapper.find('.search__input').props().value).to.equal(props.search)
  })

  it('should call handleSearch method with props', () => {
    wrapper.find('.search__button').simulate('click')
    assert.calledOnce(props.handleSearch)    
  })

  it('should call handleChange when changing input value manualy', () => {
    wrapper.find('.search__input').simulate('change')
    assert.calledOnce(props.handleChange)    
  })
})