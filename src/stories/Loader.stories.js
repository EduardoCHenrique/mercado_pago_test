import React from 'react'
import { storiesOf } from '@storybook/react'

import Loader from 'components/Loader'
import 'styles/index.scss';

storiesOf('Loader', module).add('Loader props', () => {
  return ( <Loader />)
})
