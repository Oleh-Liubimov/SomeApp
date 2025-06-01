import {Text, View} from 'react-native';
import React from 'react';
import {verifyInstallation} from 'nativewind';

const FavoritesScreen = () => {
  verifyInstallation();

  return (
    <View className="flex-1 p-4">
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;
