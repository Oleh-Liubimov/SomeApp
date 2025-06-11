import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import React, {useRef} from 'react';

import {COLORS} from '../constants/colors';
import {Card} from '../components/ui/Card';
import {useScrollToTop} from '@react-navigation/native';
import {FiltersDropdown} from '../components/ui/FIltersDropdown';
import {useFiltersStore} from '../store/filtersStore';
import {useCharacters} from '../hooks/query/useCharacters';

export const HomeScreen = () => {
  const {name} = useFiltersStore();
  const {data, isLoading, fetchNextPage, isFetching} = useCharacters(name);

  const listRef = useRef<FlatList>(null);

  useScrollToTop(listRef);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={COLORS.black} />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-4">
        <FiltersDropdown />
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
          data={data?.pages.flatMap(item => item.results)}
          renderItem={({item}) => <Card character={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
