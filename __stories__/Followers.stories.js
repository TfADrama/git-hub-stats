import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { CardView } from '../src/components/common';
import { Text } from 'react-native';
import { Followers } from '../src/components';

storiesOf('Followers', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Followers number={500} />);
