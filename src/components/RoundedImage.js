import React from 'react';
import { ProgressiveImage } from '.';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

const RoundedImage = ({ placeholderSource, source, style, size = 56 }) => (
  <ProgressiveImage
    style={[
      style,
      {
        height: size,
        width: size,
        borderRadius: size / 2,
      },
    ]}
    source={source}
    placeholderSource={placeholderSource}
  />
);

RoundedImage.propTypes = {
  style: ViewPropTypes.style,
  size: PropTypes.number,
};

export default RoundedImage;
