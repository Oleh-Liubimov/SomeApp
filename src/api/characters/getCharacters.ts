import {get} from '../client';
import {getCharactersResponse} from './types';

export interface SearchParams {
  page: number | string;
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  gender?: 'male' | 'female' | 'genderless' | 'unknown';
  species?: string;
  type?: string;
}

export const getCharacters = async (
  params: SearchParams,
): Promise<getCharactersResponse> => {
  const query = buildQueryParams(params);
  const response = await get<getCharactersResponse>(`/character/?${query}`);
  return response;
};

const buildQueryParams = (params: SearchParams) => {
  const query = new URLSearchParams();

  if (params.page) {
    query.append('page', params.page.toString());
  }
  if (params.name) {
    query.append('name', params.name);
  }
  if (params.status) {
    query.append('status', params.status);
  }
  if (params.gender) {
    query.append('gender', params.gender);
  }

  return query.toString();
};
