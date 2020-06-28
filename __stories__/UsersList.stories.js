import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ListUsers } from '../src/components/lists';

const data = [
  {
    id: 'xxaz',
    name: 'Tiago Freitas',
    profileImgURL: 'https://reactnative.dev/img/tiny_logo.png',
    followers: 90909,
  },
  {
    id: 'xxaaaz',
    name: 'Alberto Maria',
    profileImgURL: 'https://reactnative.dev/img/tiny_logo.png',
    followers: 20039,
  },
  {
    id: 'xxsqaz',
    name: 'Rofrigo Gervais',
    profileImgURL: 'https://reactnative.dev/img/tiny_logo.png',
    followers: 0,
  },
  {
    id: 'xddxaz',
    name: 'Zazau Fritz',
    profileImgURL: 'https://reactnative.dev/img/tiny_logo.png',
    followers: 50000,
  },
];
storiesOf('List Users', module)
  .add('default', () => (
    <ListUsers users={data} onPressUser={(index) => console.log(index)} />
  ))
  .add('with no data', () => <ListUsers />);
