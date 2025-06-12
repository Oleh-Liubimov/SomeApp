import React, {useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

import {TabNavigator} from './TabNavigator';
import {AnimatedSplashScreen} from '../components/splash/AnimatedSplashScreen';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export const RootNavigator = () => {
  const [isCustomSplashVisible, setCustomSplashVisible] = useState(true);

  const onReady = useCallback(() => {
    BootSplash.hide({fade: true});

    setCustomSplashVisible(true);

    setTimeout(() => {
      setCustomSplashVisible(false);
    }, 2000);
  }, []);

  return (
    <View className="flex-1">
      <NavigationContainer onReady={onReady}>
        <TabNavigator />
      </NavigationContainer>

      {isCustomSplashVisible && (
        <LinearGradient
          style={styles.splashContainer}
          colors={['#0057B7', '#FFD700']}>
          <AnimatedSplashScreen />
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    backgroundColor: COLORS.red300,
  },
});
