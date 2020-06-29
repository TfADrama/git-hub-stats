import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ListUsers } from '../components/lists';
import { fetchPopularUsers } from '../api/users.api';
import { Spacing } from '../styles';
import NavigationService from '../services/NavigationService';

const TrendingUsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const asyncFetchUsers = async () => {
      try {
        const response = await fetchPopularUsers();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFetchUsers();
  }, []);

  const onPressUser = (index) => {
    NavigationService.navigate('UserDetail', {
      username: users[index].username,
    });
  };

  return (
    <ListUsers
      style={styles.container}
      users={users}
      onPressUser={onPressUser}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.MAX_SPACING,
    paddingHorizontal: Spacing.MIN_SPACING,
  },
});

export default TrendingUsersScreen;
