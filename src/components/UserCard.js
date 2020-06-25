import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { CardView } from './common';
import { Spacing, Typography } from '../styles';
import { Followers } from '.';

const UserCard = ({ title, nFollowers, imgURL }) => {
  return (
    <CardView>
      {/* Profile PIC */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Followers
          style={styles.followersContainer}
          textStyle={styles.followersTextStyle}
          number={nFollowers}
        />
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    marginLeft: Spacing.DEFAULT_SPACING,
  },
  title: {
    ...Typography.Cards.title,
  },
  followersContainer: {
    marginTop: 4,
  },
  followersTextStyle: {
    fontSize: 10,
  },
});

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  nFollowers: PropTypes.number,
  imgURL: PropTypes.string,
};

export default UserCard;
