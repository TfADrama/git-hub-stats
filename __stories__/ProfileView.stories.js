import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { Text } from 'react-native';
import { ProfileHeader } from '../src/components/common';
import { Colors } from '../src/styles';

storiesOf('Profile View', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <ProfileHeader
      imgURL={
        'https://avatars2.githubusercontent.com/u/1174278?s=400&u=ba0904efeffa394e381de1880e2c6f2e2ca6d6d0&v=4'
      }
      color={Colors.primaryColor.normal}
      height={50}
    />
  ))
  .add('with components below', () => (
    <>
      <ProfileHeader
        imgURL={'https://reactnative.dev/img/tiny_logo.png'}
        color={Colors.primaryColor.normal}
      />
      <Text>Another Component</Text>
    </>
  ));
