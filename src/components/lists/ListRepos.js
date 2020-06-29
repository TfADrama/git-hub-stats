import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ListBase } from './shared';
import { Typography, Spacing, Colors } from '../../styles';
import { Strings } from '../../other';
import { RepoCard } from '../cards';

const ListRepos = ({ repos, style }) => {
  const ListEmptyComponent = () => {
    return (
      <View style={styles.container}>
        <Icon
          name="source-repository"
          color={Colors.primaryColor.normal}
          size={Spacing.ListUsers.empty.ICON_SIZE}
          style={styles.icon}
        />
        <Text style={styles.text}>{Strings.LIST_REPOS_EMPTY}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    const repo = repos[index];
    return (
      <RepoCard
        style={styles.repoCard}
        name={repo.name}
        stars={repo.numberOfStars}
        description={repo.description}
      />
    );
  };

  return (
    <ListBase
      style={style}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={renderItem}
      data={repos}
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
    fontWeight: '600',
  },
  icon: {
    marginBottom: Spacing.MIN_SPACING,
  },
  repoCard: {
    marginBottom: Spacing.MIN_SPACING,
  },
});

export default ListRepos;
