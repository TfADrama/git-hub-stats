import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Spacing, Colors } from '../../styles';
import { ProgressiveImage, RoundedImage } from '../imgs';

const ProfileHeader = ({
  color,
  imgURL,
  height = 50,
  imgSize = Spacing.PROFILE_IMG_SIZE,
}) => {
  const imgSource = { uri: imgURL };
  const containerStyle = [
    styles.container,
    { backgroundColor: color, height, marginBottom: imgSize / 2 },
  ];
  const imgStyle = [
    styles.image,
    { top: height - imgSize / 2 }, // To center the image
  ];

  return (
    <View style={containerStyle}>
      <ProgressiveImage source={imgSource} style={[StyleSheet.absoluteFill]} />
      <View style={styles.colorView} />
      <RoundedImage source={imgSource} size={imgSize} style={imgStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorView: {
    backgroundColor: Colors.primaryColor.transparent,
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    position: 'absolute',
  },
});

ProfileHeader.propTypes = {
  color: PropTypes.string,
  imgURL: PropTypes.string,
  height: PropTypes.number,
};

export default ProfileHeader;
