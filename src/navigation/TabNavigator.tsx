import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from './types/types';
import {MainNavigator} from './MainNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
