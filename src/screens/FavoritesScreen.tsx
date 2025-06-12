import {FlatList, Image, View} from 'react-native';
import React from 'react';
import {useFavoritesStore} from '../store/favoritesStore';
import {Card} from '../components/ui/Card';

export const FavoritesScreen = () => {
  const favorites = useFavoritesStore(s => s.favorites);
  return (
    <View className="flex-1 p-4">
      {favorites.length === 0 ? (
        <View className="flex-1 items-center justify-center rounded-lg overflow-hidden">
          <Image source={require('../assets/images/image.png')} />
        </View>
      ) : (
        <FlatList
          className="w-full"
          showsVerticalScrollIndicator={false}
          data={favorites}
          renderItem={({item}) => (
            <Card isCardTouchable={false} character={item} />
          )}
        />
      )}
    </View>
  );
};
