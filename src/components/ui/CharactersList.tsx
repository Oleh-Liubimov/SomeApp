import {useRef} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {useCharacters} from '../../hooks/query/useCharacters';
import {Card} from './Card';

export const CharactersList = () => {
  const {data, isLoading, fetchNextPage, isFetching} = useCharacters();

  const listRef = useRef<FlatList>(null);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={COLORS.black} />
      </View>
    );
  }
  return (
    <FlatList
      ref={listRef}
      className="w-full"
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator size={'small'} color={COLORS.black} />
        ) : null
      }
      contentContainerClassName="pt-4"
      onEndReached={() => fetchNextPage()}
      scrollEventThrottle={16}
      data={data?.pages.flatMap(item => item.results)}
      renderItem={({item}) => <Card character={item} />}
    />
  );
};
