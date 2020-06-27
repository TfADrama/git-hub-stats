import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { CardView } from '.';
import { Spacing, Typography, Colors } from '../../styles';
import { Stars } from '../common';

const RepoCard = ({ name, stars, description, numberOfLines, navigate }) => {
  return (
    <CardView navigate={navigate}>
      <View style={styles.topView}>
        <Text style={styles.title}>{name}</Text>
        <Stars number={stars} />
      </View>

      {description && (
        <Text style={styles.description} numberOfLines={numberOfLines}>
          {description}
        </Text>
      )}
    </CardView>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    marginLeft: Spacing.DEFAULT_SPACING,
  },
  title: {
    ...Typography.Cards.title,
  },
  description: {
    fontSize: 12,
    color: Colors.primaryColor.normal,
    textAlign: 'justify',
    marginTop: Spacing.MIN_SPACING,
  },
});

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number,
  description: PropTypes.string,
  numberOfLines: PropTypes.number,
  navigate: PropTypes.bool,
};

export default RepoCard;
