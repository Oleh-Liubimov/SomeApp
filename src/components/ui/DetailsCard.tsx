import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Character} from '../../api/characters/types';
import {HeartIcon} from 'lucide-react-native';
import {COLORS} from '../../constants/colors';
import {useFavoritesStore} from '../../store/favoritesStore';
import {useEpisodeById} from '../../hooks/query/useEpisodesByIds';
import {EpisodeCard} from './EpisodeCard';

interface CardProps {
  character: Character;
}

export const DetailsCard = ({character}: CardProps) => {
  const toggleFavorite = useFavoritesStore(s => s.toggleFavorite);
  const isFavorite = useFavoritesStore(s => s.isFavorite(character?.id));

  const episodesIds = character.episode.map(url => {
    const ids = url.split('/');
    return ids[ids.length - 1];
  });

  const {data, isLoading} = useEpisodeById(episodesIds);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!character) {
    return null;
  }

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
      <View className="pt-2">
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-2"
            renderItem={({item}) => <EpisodeCard episode={item} />}
          />
        )}
      </View>
    </View>
  );
};
