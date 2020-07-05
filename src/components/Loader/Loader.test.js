import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { random } from 'faker'

import Loader from './Loader'

describe('Loader Component', () => {
  const randomClasses = random.words()
  const wrapper = shallow(<Loader className={randomClasses} />)

  it('should render', () => {
    expect(wrapper.find('.loader')).to.have.length(1)
  })

  it('should render with props classes', () => {
    expect(wrapper.find('.loader').hasClass(randomClasses)).to.equal(true)
  })
})