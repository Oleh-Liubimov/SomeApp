import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

import {FiltersDropdown} from '../components/ui/FIltersDropdown';
import {CharactersList} from '../components/ui/CharactersList';

export const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4">
          <FiltersDropdown />
          <CharactersList />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
