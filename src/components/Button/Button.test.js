import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { lorem } from 'faker'
import { spy, assert } from 'sinon'

import Button from './Button'

describe('Button Component', () => {
  const props = {
    fakeFunction: spy()
  }
  const text = lorem.text()
  const wrapper = shallow(<Button onClick={props.fakeFunction}>{text}</Button>)

  it('should render', () => {
    expect(wrapper.find('.button')).to.have.length(1)
  })

  it('should render text children', () => {  
    expect(wrapper.children().text()).to.equal(text)
  })

  it('should render with base classes', () => {
    expect(wrapper.find('.button').hasClass('button--medium')).to.equal(true)
  })

  it('should render with included props', () => {
    expect(wrapper.props().onClick).to.equal(props.fakeFunction)
  })

  it('should trigger function on Click', () => {
    wrapper.find('.button').simulate('click')
    assert.calledOnce(props.fakeFunction)
  })
})