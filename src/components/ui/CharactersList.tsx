import {useRef} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {useCharacters} from '../../hooks/query/useCharacters';
import {Card} from './Card';

export const CharactersList = () => {
  const {data, isLoading, fetchNextPage, isFetching} = useCharacters();
  const characters = data?.pages.flatMap(page => page.results) ?? [];
  console.log(characters);

  const listRef = useRef<FlatList>(null);

  return (
    <>
      {characters.length === 0 && !isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={COLORS.black} />
        </View>
      ) : (
        <FlatList
          ref={listRef}
          className="w-full"
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            isFetching ?? characters.length > 0 ? (
              <ActivityIndicator size={'small'} color={COLORS.black} />
            ) : null
          }
          contentContainerClassName="pt-4"
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchNextPage()}
          scrollEventThrottle={16}
          data={data?.pages.flatMap(item => item.results)}
          renderItem={({item}) => <Card character={item} />}
        />
      )}
    </>
  );
};
