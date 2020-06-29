import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

export default createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  UserDetail: {
    screen: UserDetailScreen,
  },
});
