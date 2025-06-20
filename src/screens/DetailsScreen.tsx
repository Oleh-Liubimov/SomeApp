import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DetailsCard} from '../components/ui/DetailsCard';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../navigation/types/types';
import {COLORS} from '../constants/colors';
import {useCharacterById} from '../hooks/query/useCharacterById';

type DetailsScreenRoute = RouteProp<MainStackParamList, 'DetailsScreen'>;

export const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRoute>();
  const navigation = useNavigation();

  const {data, isLoading} = useCharacterById(route.params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation, route.params.title]);

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4">
        {isLoading ? (
          <ActivityIndicator size={'large'} color={COLORS.black} />
        ) : (
          <DetailsCard character={data} />
        )}
      </View>
    </SafeAreaView>
  );
};
