
  import { TestBed } from '@angular/core/testing';
  import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
  import { CharacterService } from './character.service';
  import { CharacterResponse } from './characterResponse.model';
import { HttpClient } from '@angular/common/http';

  describe('CharacterService', () => {
    let service: CharacterService;
    let httpMock: HttpTestingController;

    afterEach(() => {
      httpMock.verify();
    });

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CharacterService]
      });
      service = TestBed.get(CharacterService);
      httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get characters', () => {
      const mockResponse: CharacterResponse = {
        info:{
          count: 671,
          pages: 34,
          next: 'https://rickandmortyapi.com/api/character/?page=2',
          prev: null
        },
        results: [
          {
            id: 1,
            name: 'Rick',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            gender: 'Male',
            species: 'Human',
          }
        ]
      };

      service.getCharacters().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne('https://rickandmortyapi.com/api/character?size=8');
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get character by name', () => {
      const name = 'Rick';
      const mockResponse: CharacterResponse = {
        info:{
          count: 671,
          pages: 34,
          next: 'https://rickandmortyapi.com/api/character/?page=2',
          prev: null
        },
        results: [
          {
            id: 1,
            name: 'Rick',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            gender: 'Male',
            species: 'Human',
          }
        ]
      };

      service.getCharacterByName(name).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`https://rickandmortyapi.com/api/character/?name=${name}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

