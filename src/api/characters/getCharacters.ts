import {get} from '../client';
import {Character, getCharactersResponse} from './types';

export interface SearchParams {
  search: string;
  page: string;
}

export const getCharacters = async ({
  page,
  search,
}: SearchParams): Promise<Character[]> => {
  const characters = await get<getCharactersResponse>(
    `?search=${search}&page=${page}`,
  );
  return characters;
};
