import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types/types';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerBlurEffect: 'extraLight',
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerBackButtonDisplayMode: 'generic',
        }}
      />
    </Stack.Navigator>
  );
};
