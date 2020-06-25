import React from 'react';
import { View, Text, ViewPropTypes, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Strings } from '../other';
import { Colors } from '../styles';

const Followers = ({ style, textStyle, number }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon style={[styles.text, textStyle]} name={'user-o'} />
      <Text style={[styles.number, styles.text, textStyle]}>{number}</Text>
      <Text style={[styles.text, textStyle]}>{Strings.FOLLOWERS}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.primaryColor.normal,
    fontSize: 13,
  },
  number: {
    marginHorizontal: 4,
    fontWeight: '600',
  },
});

Followers.propTypes = {
  style: ViewPropTypes.style,
  number: PropTypes.number.isRequired,
};

export default Followers;
