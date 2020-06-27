import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { UserCard } from '../src/components/cards';

storiesOf('User Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <UserCard
      name={'Tiago Freitas'}
      nFollowers={500}
      imgURL={'https://reactnative.dev/img/tiny_logo.png'}
    />
  ))
  .add('with navigation', () => (
    <UserCard
      name={'Tiago Freitas'}
      nFollowers={500}
      imgURL={'https://reactnative.dev/img/tiny_logo.png'}
      navigate
    />
  ));
