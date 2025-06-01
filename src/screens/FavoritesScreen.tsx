import {Text, View} from 'react-native';
import React from 'react';
import {verifyInstallation} from 'nativewind';
import {HeartIcon} from '../assets/svg/HeartIcon';

const FavoritesScreen = () => {
  verifyInstallation();

  return (
    <View className="flex-1 p-4">
      <Text>FavoritesScreen</Text>
      <HeartIcon size={48} checked={true} />
    </View>
  );
};

export default FavoritesScreen;
