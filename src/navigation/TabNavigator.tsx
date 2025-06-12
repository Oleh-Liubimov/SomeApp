import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackParamList} from './types/types';
import {MainNavigator} from './MainNavigator';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {HomeIcon} from '../components/TabIcons/HomeIcon';
import {FavoritesIcon} from '../components/TabIcons/FavoritesIcon';
import {COLORS} from '../constants/colors';

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.red300,
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarIcon: FavoritesIcon,
          title: 'Favorites',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
