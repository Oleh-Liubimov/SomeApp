import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from '../api/characters/getCharacters';

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: ({pageParam = 1}) => getCharacters({page: pageParam}),
    initialPageParam: 0,
    getNextPageParam: lastPage => {
      if (!lastPage.info.next) {
        return undefined;
      }
      const match = lastPage.info.next.match(/page=(\d+)/);
      return match ? Number(match[1]) : undefined;
    },
  });
};
