// Generated by https://quicktype.io

import { Character } from "./character.model";

export interface CharacterResponse {
  info:    Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev: string;
}
