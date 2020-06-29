import React from 'react';

import { configureAxios } from './api/configuration';
import { createAppContainer } from 'react-navigation';
import { MainRoutes } from './routes';
import NavigationService from './services/NavigationService';

configureAxios();

const AppContainer = createAppContainer(MainRoutes);

export default class App extends React.Component {
  // ...

  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
