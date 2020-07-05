import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ListItem from 'components/ListItem'
import { commerce, image, random } from 'faker'

import List from './List'

const products = [
  {
    price: commerce.price(),
    picture: image.image(),
    title: commerce.productName(),
    id: random.uuid()
  },
  {
    price: commerce.price(),
    picture: image.image(),
    title: commerce.productName(),
    id: random.uuid()
  },
  {
    price: commerce.price(),
    picture: image.image(),
    title: commerce.productName(),
    id: random.uuid()
  },
  {
    price: commerce.price(),
    picture: image.image(),
    title: commerce.productName(),
    id: random.uuid()
  }
]


describe('List Component', () => {
      
  const wrapper = shallow(<List products={products} />)

  it('should render', () => {
    expect(wrapper.find('.list')).to.have.length(1)
  })

  it('should render a ListItem for each product', () => {
    expect(wrapper.find(ListItem)).to.have.length(products.length)
  })

  it('should call each list item with exactly props', () => {
    expect(wrapper.find(ListItem).at(0).props()).to.deep.equal(products[0])
    expect(wrapper.find(ListItem).at(1).props()).to.deep.equal(products[1])
    expect(wrapper.find(ListItem).at(2).props()).to.deep.equal(products[2])
    expect(wrapper.find(ListItem).at(3).props()).to.deep.equal(products[3])
  })
})