import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CharacterResponse } from './characterResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character?size=8');
  }

  getCharacterByName(name: string): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/?name=${name}`);
  }
}
