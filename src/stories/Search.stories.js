import React from 'react'
import { storiesOf } from '@storybook/react'
import Search from 'components/Search/Search'
import 'styles/index.scss';

storiesOf('Search', module).add('Search props', () => {
  return ( <Search /> )
})
