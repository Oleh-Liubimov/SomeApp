import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Character} from '../../api/characters/types';
import {HeartIcon} from 'lucide-react-native';
import {COLORS} from '../../constants/colors';
import {useFavoritesStore} from '../../store/favoritesStore';

interface CardProps {
  character: Character;
}

export const DetailsCard = ({character}: CardProps) => {
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite(character?.id));

  if (!character) {
    return null;
  }
  console.log(character);

  return (
    <View className="flex-1 items-center">
      <Image
        source={{uri: character.image}}
        className="w-full h-1/3 rounded-3xl"
      />

      <View className=" flex-row pt-4 w-full">
        <View className="w-full">
          <View className="flex-row  justify-between">
            <Text className="text-4xl font-bold text-black text-left">
              {character.name}
            </Text>
            <TouchableOpacity onPress={() => toggleFavorite(character)}>
              <HeartIcon
                size={36}
                fill={isFavorite ? COLORS.red300 : COLORS.white}
                color={isFavorite ? COLORS.red300 : COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <Text className="text-lg text-gray-600">
            {character.status} • {character.species}
          </Text>
          <Text className=" text-lg text-gray-600 mt-1">
            Gender: {character.gender}
          </Text>
          <Text className="text-lg text-gray-400 mt-1">
            Location: {character.location.name}
          </Text>
        </View>
      </View>
    </View>
  );
};
