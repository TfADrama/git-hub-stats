import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { Followers } from '../src/components';

storiesOf('Followers', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Followers number={500} />);
