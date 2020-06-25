import React from 'react';
import { ProgressiveImage } from '.';

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

export default RoundedImage;
