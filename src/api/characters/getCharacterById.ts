import {get} from '../client';
import {Character} from './types';

export const getCharacterById = async (id: string): Promise<Character> => {
  return get<Character>(`/character/${id}`);
};
