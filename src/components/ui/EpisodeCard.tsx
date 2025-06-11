import {Text, View} from 'react-native';
import {Episode} from '../../api/characters/types';

interface EpisodeCardProps {
  episode: Episode | undefined;
}
export const EpisodeCard = ({episode}: EpisodeCardProps) => {
  if (!episode) {
    return null;
  }
  return (
    <View className="flex-row border rounded-2xl items-center justify-between min-w-full bg-gray-200">
      <View className="p-4 gap-1">
        <Text>{episode.name}</Text>
        <Text>{episode.episode}</Text>
      </View>
      <Text className="p-4">{episode.air_date}</Text>
    </View>
  );
};
