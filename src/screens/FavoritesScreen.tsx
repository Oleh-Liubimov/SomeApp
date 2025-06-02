import {FlatList, View} from 'react-native';
import React from 'react';
import {useFavoritesStore} from '../store/favoritesStore';
import {Card} from '../components/ui/Card';

const FavoritesScreen = () => {
  const favorites = useFavoritesStore(s => s.favorites);
  return (
    <View className="flex-1 p-4">
      <FlatList
        className="w-full"
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <Card character={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;
