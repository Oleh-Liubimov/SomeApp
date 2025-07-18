import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useFavoritesStore} from '../store/favoritesStore';
import {rem} from '../utils/rem';
import {FavoritesCard} from '../components/ui/FavoritesCard';

export const FavoritesScreen = () => {
  const favorites = useFavoritesStore(s => s.favorites);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4">
        {favorites.length === 0 ? (
          <View className="flex-1 items-center justify-center gap-4">
            <Text style={{fontSize: rem(30)}}>There is nothing here yet</Text>
            <Text style={{fontSize: rem(20)}}>
              Add some characters to see them here
            </Text>
            <Image source={require('../assets/images/image.png')} />
          </View>
        ) : (
          <FlatList
            className="w-full"
            showsVerticalScrollIndicator={false}
            data={favorites}
            renderItem={({item}) => (
              <FavoritesCard isCardTouchable={false} character={item} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
