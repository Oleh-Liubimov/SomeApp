import {get} from '../client';
import {getCharactersResponse} from './types';

export interface SearchParams {
  page: number | string;
  query?: string;
}

export const getCharacters = async ({
  page = 1,
}: SearchParams): Promise<getCharactersResponse> => {
  return await get<getCharactersResponse>(`/character/?page=${page}`);
};
