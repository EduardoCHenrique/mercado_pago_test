import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { commerce, image, random } from 'faker'
import { Link } from 'react-router-dom'

import ListItem from './ListItem'

describe('ListItem Component', () => {
  const props = {
    price: commerce.price(),
    picture: image.image(),
    title: commerce.productName(),
    id: random.uuid()
  }

  const wrapper = shallow(<ListItem {...props} />)

  it('should render', () => {
    expect(wrapper.find('.list-item')).to.have.length(1)
  })

  it('should render image with its src as picture prop', () => {
    expect(wrapper.find('.list-item__picture').props().src).to.equal(props.picture)
  })

  it('should mount price as its price props', () => {
    expect(wrapper.find('.list-item__price').text()).to.equal(`R$ ${props.price}`)
  })

  it('should render title as title props', () => {
    expect(wrapper.find('.list-item__title').text()).to.equal(props.title)
  })

  it('should render two Link components', () => {
    expect(wrapper.find(Link)).to.have.length(2)
  })

  it('should render two Links sending user to item Detail page', () => {
    const expectedLink = `/item/${props.id}`
    expect(wrapper.find(Link).at(0).props().to).to.equal(expectedLink)
    expect(wrapper.find(Link).at(1).props().to).to.equal(expectedLink)
  })

})