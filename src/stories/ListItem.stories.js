import React from 'react'
import faker from 'faker'
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react'
import ListItem from 'components/ListItem'
import 'styles/index.scss';

const props = {
  price: faker.commerce.price(),
  picture: faker.image.image(),
  title: faker.commerce.productName(),
  id: faker.random.uuid()
}

storiesOf('ListItem', module)
.addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
.add('ListItem props', () => {
  return <ListItem  {...props} />
})
