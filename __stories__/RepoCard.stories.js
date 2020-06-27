import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { RepoCard } from '../src/components/cards';

storiesOf('Repository Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <RepoCard
      name={'Git Hub statistics'}
      stars={500}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup'
      }
    />
  ))
  .add('with small text', () => (
    <RepoCard
      name={'Git Hub statistics'}
      stars={500}
      description={'veniam consequ '}
    />
  ))
  .add('with navigation', () => (
    <RepoCard
      name={'Git Hub statistics'}
      stars={500}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup'
      }
      navigate
    />
  ))
  .add('with number of lines', () => (
    <RepoCard
      name={'Git Hub statistics'}
      stars={500}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup'
      }
      numberOfLines={2}
      navigate
    />
  ))
  .add('with no description', () => (
    <RepoCard name={'Git Hub statistics'} stars={500} navigate />
  ));
