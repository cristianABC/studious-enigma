import { createReducer, on } from '@ngrx/store';
import {  list, search } from './characters.action';
import { Character } from 'src/app/character/character.model';

export const initialState: Character[] = [];

export const characterReducer = createReducer(
  initialState,
  on(list, (state) => [
          { id:1, name: 'Rick', image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg', gender: 'male',  species:'humanoid' },
          { id:2,name: 'Morty', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', gender: 'male',  species:'humanoid'},
          { id:3,name: 'Summer', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', gender: 'female', species:'humanoid' },
          { id:4, name: 'Rick', image:'https://rickandmortyapi.com/api/character/avatar/4.jpeg', gender: 'male',  species:'humanoid' },
          { id:5,name: 'Morty', image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', gender: 'male',  species:'humanoid'},
          { id:6,name: 'Summer', image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg', gender: 'female', species:'humanoid' },
          { id:7, name: 'Rick', image:'https://rickandmortyapi.com/api/character/avatar/7.jpeg', gender: 'male',  species:'humanoid' },
          { id:8,name: 'Morty', image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg', gender: 'male',  species:'humanoid'},
          { id:9 ,name: 'Summer', image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg', gender: 'female', species:'humanoid' },
        ]),
  on(search, (state) => [
          { id:1, name: 'RickSearch', image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg', gender: 'male',  species:'humanoid' },
  ]),
);