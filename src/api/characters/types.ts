export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  home_world: string;
  films: string[];
  species: string[];
  vehicles: string[];
  star_ships: string[];
  created: string; // ISO date string
  edited: string; // ISO date string
  url: string;
}

export type getCharactersResponse = Promise<Character[]>;
