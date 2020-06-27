import React, { useRef } from 'react';
import { View, Animated, ActivityIndicator, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const AnimatedActivityIndicator = Animated.createAnimatedComponent(
  ActivityIndicator
);
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const ProgressiveImage = ({
  style,
  source,
  resizeMode,
  placeholderSource,
  placeholderResizeMode,
  showActivityIndicator = false,
  activityIndicatorColor,
}) => {
  /**
   * Only the image placeholder and the activity indicator are visible on start.
   */
  const imageAnimated = useRef(new Animated.Value(0)).current;
  const placeholderAnimated = useRef(new Animated.Value(1)).current;
  const activityIndicatorAnimated = useRef(new Animated.Value(1)).current;

  const containerRef = useRef();

  /**
   * Image as been successfully loaded.
   * Placeholder and activity indicator are hidden while the image is shown.
   * If there is any background color, it will be transparent to show the image.
   */
  const onImageLoad = () => {
    containerRef.current.setNativeProps({ backgroundColor: 'transparent' });
    Animated.parallel([
      Animated.timing(placeholderAnimated, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(imageAnimated, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(activityIndicatorAnimated, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  /**
   * On Error
   * The image is never turned visible.
   * The activity indicator is hidden and the placeholder / background color stays visible
   */
  const onError = (e) => {
    Animated.timing(activityIndicatorAnimated, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View ref={containerRef} style={style}>
      {/* Placeholder */}
      {placeholderSource && (
        <AnimatedFastImage
          source={placeholderSource}
          style={[
            style,
            styles.viewOverlay,
            {
              opacity: placeholderAnimated,
            },
          ]}
          resizeMode={placeholderResizeMode}
        />
      )}
      {/* Image */}
      {source && (
        <AnimatedFastImage
          source={source}
          style={[style, styles.viewOverlay, { opacity: imageAnimated }]}
          onLoad={onImageLoad}
          onError={onError}
          resizeMode={resizeMode}
        />
      )}
      {/* Activity Indicator */}
      {showActivityIndicator && (
        <AnimatedActivityIndicator
          size="small"
          style={[
            style,
            styles.viewOverlay,
            { opacity: activityIndicatorAnimated },
          ]}
          color={activityIndicatorColor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

ProgressiveImage.propTypes = {
  showActivityIndicator: PropTypes.bool,
  activityIndicatorColor: PropTypes.string,
};

export default ProgressiveImage;
