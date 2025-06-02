import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import React from 'react';
import {DetailsCard} from '../components/ui/DetailsCard';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useCharacterById} from '../hooks/useCharacterById';
import {MainStackParamList} from '../navigation/types/types';
import {COLORS} from '../constants/colors';

type DetailsScreenRoute = RouteProp<MainStackParamList, 'DetailsScreen'>;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRoute>();

  const {data, isLoading} = useCharacterById(route.params.id);

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

export default DetailsScreen;
