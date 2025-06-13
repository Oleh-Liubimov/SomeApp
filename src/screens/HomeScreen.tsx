import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import {CharactersList} from '../components/ui/CharactersList';
import {AppSearchBar} from '../components/ui/AppSearchBar';

export const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4 pt-4">
          <AppSearchBar />
          <CharactersList />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
