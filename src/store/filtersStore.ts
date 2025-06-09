import {create} from 'zustand';

export type filtersState = {
  name: string;
  status: 'alive' | 'dead' | 'unknown' | null;
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown' | null;
  setFilters: (
    filters: Partial<Omit<filtersState, 'setFilters' | 'resetFilters'>>,
  ) => void;
  resetFilters: () => void;
};

export const useFiltersStore = create<filtersState>(set => ({
  name: '',
  gender: null,
  species: '',
  status: null,
  type: '',
  setFilters: filters => set(state => ({...state, ...filters})),
  resetFilters: () =>
    set({
      name: '',
      gender: null,
      species: '',
      status: null,
      type: '',
    }),
}));
