import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { UserCard } from '../src/components';

storiesOf('User Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <UserCard title={'Tiago Freitas'} nFollowers={500} />);
