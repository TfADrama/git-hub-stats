import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

import { Followers } from '../components/common';
import { Spacing, Colors, Typography } from '../styles';
import { ProfileHeader } from '../components/profile';
import ListRepos from '../components/lists/ListRepos';

// TODO: LINK PROFILE
const UserDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader
        height={100}
        imgSize={100}
        imgURL={
          'https://avatars2.githubusercontent.com/u/1174278?s=400&u=ba0904efeffa394e381de1880e2c6f2e2ca6d6d0&v=4'
        }
      />
      <View style={styles.contentWrapper}>
        <View style={styles.profileBody}>
          <Text style={styles.name}>Tiago Freitas</Text>
          <Text style={styles.mail}>tfafreitas@gmail.com</Text>
          <Followers textStyle={styles.followers} />
        </View>
      </View>
      <ListRepos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginHorizontal: 24,
    marginVertical: Spacing.MIN_SPACING,
  },
  profileBody: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingBottom: Spacing.DEFAULT_SPACING,
    marginBottom: Spacing.MAX_SPACING,
    borderBottomColor: Colors.lineColor,
    borderBottomWidth: 2,
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: Colors.primaryColor.normal,
  },
  mail: {
    marginVertical: Spacing.DEFAULT_SPACING,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primaryColor.normal,
  },
  followers: {
    fontSize: 16,
  },
});

export default UserDetailScreen;
