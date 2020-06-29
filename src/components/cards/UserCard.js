import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { CardView } from '.';
import { Spacing, Typography } from '../../styles';
import { RoundedImage } from '../imgs';

const UserCard = ({ name, imgURL, navigate, style }) => {
  return (
    <CardView style={style} contentStyle={styles.cardStyle} navigate={navigate}>
      <RoundedImage
        source={{
          uri: imgURL,
        }}
        size={Spacing.MINI_PROFILE_IMG_SIZE}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </CardView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  nFollowers: PropTypes.number,
  imgURL: PropTypes.string,
  navigate: PropTypes.bool,
};

export default UserCard;
