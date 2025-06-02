import {ActivityIndicator, FlatList, View} from 'react-native';
import React from 'react';

import {COLORS} from '../constants/colors';
import {useCharacters} from '../hooks/useCharacters';
import {Card} from '../components/ui/Card';

const HomeScreen = () => {
  const {data, isLoading, fetchNextPage} = useCharacters();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={COLORS.black} />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center px-6">
      <FlatList
        className="w-full"
        showsVerticalScrollIndicator={false}
        onEndReached={() => fetchNextPage()}
        data={data?.pages.flatMap(item => item.results)}
        renderItem={({item}) => <Card character={item} />}
      />
    </View>
  );
};

export default HomeScreen;
