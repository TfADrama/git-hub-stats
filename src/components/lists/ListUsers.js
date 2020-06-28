import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ListBase } from './shared';
import { Typography, Spacing, Colors } from '../../styles';
import { Strings } from '../../other';
import { UserCard } from '../cards';

const ListUsers = ({ users, onPressUser }) => {
  const ListEmptyComponent = () => {
    return (
      <View style={styles.container}>
        <Icon
          name="users"
          color={Colors.primaryColor.normal}
          size={Spacing.ListUsers.empty.ICON_SIZE}
          style={styles.icon}
        />
        <Text style={styles.text}>{Strings.LIST_USERS_EMPTY}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    const user = users[index];
    return (
      <UserCard
        style={styles.userCard}
        navigate
        imgURL={user.profileImgURL}
        nFollowers={user.followers}
        name={user.name}
      />
    );
  };

  return (
    <ListBase
      onPressItem={onPressUser}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={renderItem}
      data={users}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.title1,
    color: Colors.primaryColor.normal,
  },
  icon: {
    marginBottom: Spacing.MAX_SPACING,
  },
  userCard: {
    marginBottom: Spacing.MIN_SPACING,
  },
});

export default ListUsers;
