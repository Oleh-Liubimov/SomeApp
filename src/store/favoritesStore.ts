import {create} from 'zustand';
import {Character} from '../api/characters/types';

type FavoritesStore = {
  favorites: Character[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (character: Character) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  isFavorite: id => get().favorites.some(item => item.id === id),
  toggleFavorite: (character: Character) => {
    const {favorites} = get();

    const exists = favorites.some(fav => fav.id === character.id);

    if (exists) {
      set({
        favorites: favorites.filter(fav => fav.id !== character.id),
      });
    } else {
      set({
        favorites: [...favorites, character],
      });
    }
  },
}));
