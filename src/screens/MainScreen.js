import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListUsers, ListRepos } from '../components/lists';
import { Colors } from '../styles';
import { Strings } from '../other';
import TrendingUsersScreen from './TrendingUsersScreen';
import TopReposScreen from './TopReposScreen';

const MainScreen = () => {
  const initialRoutes = [
    {
      key: 'trendingUsers',
      icon: 'trending-up',
      title: Strings.TRENDING_USERS,
    },
    { key: 'activeUsers', icon: 'source-branch', title: Strings.ACTIVE_USERS },
    { key: 'topRepos', icon: 'star-circle', title: Strings.TOP_REPOS },
  ];

  const [index, setIndex] = useState(0);
  const [routes] = useState(initialRoutes);

  const handleIndexChange = (index) => setIndex(index);

  const renderIcon = ({ route, color }) => (
    <Icon name={route.icon} size={24} color={color} />
  );

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        labelStyle={styles.label}
        renderIcon={renderIcon}
        style={styles.tabbar}
      />
    );
  };

  const renderScene = SceneMap({
    trendingUsers: TrendingUsersScreen,
    activeUsers: ListUsers,
    topRepos: TopReposScreen,
  });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {
  title: 'Git Hub',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: Colors.primaryColor.normal,
  },
  indicator: {
    backgroundColor: '#fff',
  },
  label: {
    textAlign: 'center',
  },
});

export default MainScreen;
