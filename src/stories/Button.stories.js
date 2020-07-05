import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../components/Button'
import 'styles/index.scss';

storiesOf('Button', module).add('Button props', () => {
  return ( <Button>Go To Card</Button> )
})
