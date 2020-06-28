import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

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

it('should call onPress', () => {
  const onPressMock = jest.fn();

  const { getByText } = render(
    <ListUsers users={data} onPressUser={onPressMock} />
  );

  const item = getByText('Rofrigo Gervais');

  fireEvent.press(item);
  expect(onPressMock).toHaveBeenCalled();
});

it('should call onPress with user array index', () => {
  const onPressMock = jest.fn();

  const { getByText } = render(
    <ListUsers users={data} onPressUser={onPressMock} />
  );

  const item = getByText('Rofrigo Gervais');

  fireEvent.press(item);
  expect(onPressMock).toBeCalledWith(2);
});
