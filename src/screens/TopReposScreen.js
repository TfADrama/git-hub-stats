import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { ListRepos } from '../components/lists';
import { fetchTopYearStarRepos } from '../api/repos.api';
import { Spacing } from '../styles';

const TopReposScreen = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const asyncFetchRepos = async () => {
      try {
        const response = await fetchTopYearStarRepos();
        setRepos(response);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFetchRepos();
  }, []);

  return <ListRepos style={styles.container} repos={repos} />;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.MAX_SPACING,
    paddingHorizontal: Spacing.MIN_SPACING,
  },
});

export default TopReposScreen;
