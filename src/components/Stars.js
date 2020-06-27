import React from 'react';
import { View, ViewPropTypes, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Colors } from '../styles';

const Stars = ({ style, number = 0 }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon style={[styles.stars]} name={'star'} />
      <Text style={[styles.stars, styles.text]}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    color: Colors.starColor,
    fontSize: 13,
    fontWeight: '600',
  },
  text: {
    marginLeft: 5,
  },
});

Stars.propTypes = {
  style: ViewPropTypes.style,
  number: PropTypes.number,
};

export default Stars;
