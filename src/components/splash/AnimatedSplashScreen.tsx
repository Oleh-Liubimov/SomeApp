import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const rick = require('../../assets/images/Rick.png');

export const AnimatedSplashScreen = () => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.2, {duration: 500, easing: Easing.out(Easing.ease)}),
        withTiming(1, {duration: 500, easing: Easing.out(Easing.ease)}),
      ),
      -1,
      true,
    );

    rotate.value = withRepeat(
      withTiming(360, {duration: 2000, easing: Easing.linear}),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}, {rotateY: `${rotate.value}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Image source={rick} style={{width: 100, height: 100}} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
