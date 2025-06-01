import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Character} from '../../api/characters/types';

interface CardProps {
  character: Character | undefined;
}

export const Card = ({character}: CardProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  if (!character) {
    return null;
  }
  return (
    <View className="flex-row items-center bg-white rounded-2xl shadow-md mb-4 p-4">
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
      <TouchableOpacity onPress={() => handleCheck()} />
    </View>
  );
};
