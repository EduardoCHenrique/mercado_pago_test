import React from 'react'
import { storiesOf } from '@storybook/react'

import EmptyState from 'components/EmptyState'
import 'styles/index.scss';

storiesOf('EmptyState', module).add('EmptyState props', () => {
  return ( <EmptyState /> )
})
