import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { Stars } from '../src/components/common';

storiesOf('Stars', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Stars number={57.9} />)
  .add('with no stars', () => <Stars />);
