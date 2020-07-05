import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import EmptyState from './EmptyState'

describe('EmptyState Component', () => {
  const wrapper = shallow(<EmptyState />)

  it('should render', () => {
    expect(wrapper.find('.empty-state')).to.have.length(1)
  })

  it('should render icon as a bad face', () => {
    expect(wrapper.find('.empty-state__icon').text()).to.equal('=/')
  })

  it('should render specific text', () => {
    expect(wrapper.find('.empty-state__text').text()).to.equal('Não há resultados para esta busca.')
  })
})