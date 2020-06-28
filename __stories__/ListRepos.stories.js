import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ListRepos } from '../src/components/lists';

const data = [
  {
    id: 'xxaz',
    name: 'Tiago Freitas',
    description: 'https://reactnative.dev/img/tiny_logo.png',
    numberOfStars: 90909,
  },
  {
    id: 'xxaaaz',
    name: 'Alberto Maria',
    description: 'https://reactnative.dev/img/tiny_logo.png',
    numberOfStars: 20039,
  },
  {
    id: 'xxsqaz',
    name: 'Rofrigo Gervais',
    description: 'https://reactnative.dev/img/tiny_logo.png',
    numberOfStars: 0,
  },
  {
    id: 'xddxaz',
    name: 'Zazau Fritz',
    description: 'https://reactnative.dev/img/tiny_logo.png',
    numberOfStars: 50000,
  },
];
storiesOf('List Repos', module)
  .add('default', () => <ListRepos repos={data} />)
  .add('with no data', () => <ListRepos />);
