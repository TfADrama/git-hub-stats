import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Spacing, Colors } from '../../styles';
import { ProgressiveImage, RoundedImage } from '../imgs';

const ProfileHeader = ({ color, imgURL, height = 50 }) => {
  const imgSource = { uri: imgURL };
  const containerStyle = [styles.container, { backgroundColor: color, height }];
  const imgStyle = [
    styles.image,
    { top: height - Spacing.PROFILE_IMG_SIZE / 2 }, // To center the image
  ];

  return (
    <View style={containerStyle}>
      <ProgressiveImage source={imgSource} style={[StyleSheet.absoluteFill]} />
      <View style={styles.colorView} />
      <RoundedImage
        source={imgSource}
        size={Spacing.PROFILE_IMG_SIZE}
        style={imgStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.PROFILE_IMG_SIZE / 2, // To make below components visible
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
