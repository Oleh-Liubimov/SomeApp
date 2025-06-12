import {useInfiniteQuery} from '@tanstack/react-query';
import {getCharacters} from '../../api/characters/getCharacters';
import {useFiltersStore} from '../../store/filtersStore';
import {useDebounce} from '../useDebounce';

export const useCharacters = () => {
  const {name, gender, status} = useFiltersStore();

  const debouncedName = useDebounce(name, 700);

  const filters = {
    name: debouncedName,
    gender: gender ?? undefined,
    status: status ?? undefined,
  };

  return useInfiniteQuery({
    queryKey: ['characters', filters],
    queryFn: ({pageParam = 1}) => getCharacters({page: pageParam, ...filters}),
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
