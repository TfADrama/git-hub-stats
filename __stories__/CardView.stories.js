import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { CardView } from '../src/components/cards';
import { Text } from 'react-native';

storiesOf('Card View', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CardView>
      <Text>Children</Text>
    </CardView>
  ))
  .add('with navigation', () => (
    <CardView navigate>
      <Text>Children</Text>
    </CardView>
  ));
