import {create} from 'zustand';
import {GenderType, StatusType} from '../types';

export type filtersState = {
  name: string;
  status: StatusType;
  gender: GenderType;
  setFilters: (
    filters: Partial<Omit<filtersState, 'setFilters' | 'resetFilters'>>,
  ) => void;
  resetFilters: () => void;
};

export const useFiltersStore = create<filtersState>(set => ({
  name: '',
  gender: undefined,
  status: undefined,
  setFilters: filters => set(state => ({...state, ...filters})),
  resetFilters: () =>
    set({
      name: '',
      gender: undefined,
      status: undefined,
    }),
}));
