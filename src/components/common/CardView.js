import React from 'react';
import { View, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { primaryColor, lineColor } from '../../styles/colors';
import { Spacing } from '../../styles';

const CardView = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderLeftWidth: 3,
    borderLeftColor: primaryColor.normal,
    borderColor: lineColor,
    borderWidth: Spacing.DEFAULT_BORDER_WIDTH,
    padding: Spacing.DEFAULT_SPACING,
    borderRadius: Spacing.DEFAULT_RADIUS,
  },
});

CardView.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

export default CardView;
