import {useQuery} from '@tanstack/react-query';
import {getCharacterById} from '../api/characters/getCharacterById';

export const useCharacterById = (id: number) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => {
      return getCharacterById(String(id));
    },
  });
};
