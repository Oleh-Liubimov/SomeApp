import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Character} from '../../api/characters/types';
import {HeartIcon} from 'lucide-react-native';
import {COLORS} from '../../constants/colors';
import {useFavoritesStore} from '../../store/favoritesStore';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation/types/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface CardProps {
  character: Character;
  isCardTouchable?: boolean;
}

export const Card = ({character, isCardTouchable = true}: CardProps) => {
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite(character?.id));

  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  if (!character) {
    return null;
  }

  return (
    <View className="flex-row items-center bg-white rounded-2xl shadow-md mb-4 p-4">
      <TouchableOpacity
        className="flex-1 flex-row"
        disabled={!isCardTouchable}
        onPress={
          isCardTouchable
            ? () => {
                navigation.navigate('DetailsScreen', {
                  id: character.id,
                  title: character.name,
                });
              }
            : undefined
        }>
        <Image
          source={{uri: character.image}}
          className="w-20 h-20 rounded-full"
        />
        <View className="ml-4 flex-1">
          <Text className="text-lg font-bold text-black">{character.name}</Text>
          <Text className="text-sm text-gray-600">
            {character.status} • {character.species}
          </Text>
          <Text className="text-xs text-gray-400 mt-1">
            Location: {character.location.name}
          </Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorite(character)}>
          <HeartIcon
            fill={isFavorite ? COLORS.red300 : COLORS.white}
            color={isFavorite ? COLORS.red300 : COLORS.black}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
