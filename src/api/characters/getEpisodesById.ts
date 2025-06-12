import {get} from '../client';
import {Episode} from './types';

type Params = {
  ids: string[];
};

export const getEpisodesById = async ({ids}: Params): Promise<Episode[]> => {
  const idsParam = ids.join(',');

  return get<Episode[]>(`/episode/${idsParam}`).then(res =>
    Array.isArray(res) ? res : [res],
  );
};
