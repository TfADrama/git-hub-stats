import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { primaryColor, lineColor } from '../../styles/colors';
import { Spacing, Colors } from '../../styles';

const CardView = ({ contentStyle, children, navigate = false }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper, contentStyle]}>{children}</View>
      {navigate && <Icon name="arrow-right" style={styles.icon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderLeftWidth: 3,
    borderLeftColor: primaryColor.normal,
    borderColor: lineColor,
    borderWidth: Spacing.DEFAULT_BORDER_WIDTH,
    borderRadius: Spacing.DEFAULT_RADIUS,
  },
  wrapper: {
    flex: 1,
    margin: Spacing.DEFAULT_SPACING,
  },
  icon: {
    alignSelf: 'center',
    marginRight: Spacing.DEFAULT_SPACING,
    color: Colors.primaryColor.normal,
    fontSize: 18,
  },
});

CardView.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
  navigate: PropTypes.bool,
};

export default CardView;
