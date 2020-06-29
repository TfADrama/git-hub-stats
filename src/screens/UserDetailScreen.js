import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

import { Followers } from '../components/common';
import { Spacing, Colors } from '../styles';
import { ProfileHeader } from '../components/profile';
import ListRepos from '../components/lists/ListRepos';
import { fetchUser, fetchUserRepositories } from '../api/users.api';

// TODO: LINK PROFILE
const UserDetailScreen = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const asyncFetchUser = async () => {
      try {
        const userResponse = await fetchUser();
        const repoResponse = await fetchUserRepositories(userResponse.username);
        setUser(userResponse);
        setRepos(repoResponse);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader height={100} imgSize={100} imgURL={user.avatarURL} />
      <View style={styles.contentWrapper}>
        <View style={styles.profileBody}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.mail}>{user.email}</Text>
          <Followers
            number={user.numberOfFollowers}
            textStyle={styles.followers}
          />
        </View>
      </View>
      <ListRepos repos={repos} />
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
