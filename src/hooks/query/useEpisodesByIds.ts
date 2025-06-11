import {useQuery} from '@tanstack/react-query';
import {getEpisodesById} from '../../api/characters/getEpisodesById';

export const useEpisodeById = (ids: string[]) => {
  return useQuery({
    queryKey: ['episode', ids],
    queryFn: () => getEpisodesById({ids}),
  });
};
