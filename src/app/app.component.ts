import { Component, HostListener } from '@angular/core';
import { CharacterService } from './character/character.service';
import { Character } from './character/character.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { list, search } from './store/characters/characters.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rickyMorty';
  characters$: Observable<Character[]>;
  pendingCharacters: Character[] = [];
  count:number = 1;
  searchText: string;
  isLoading: boolean = false;
  error: string;

/* 
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(this.pendingCharacters.length > 0 && window.pageYOffset > 100 *this.count){
      this.pendingCharacters.map((character, index)=>{
        if(index <=7){
          this.characters.push(character);
          this.pendingCharacters.splice(index, 1);
        }
      })
    }
  } */

  constructor(private store: Store<{ characters: Character[] }>, private characterService: CharacterService){
    this.characters$ = store.select('characters');
    this.store.dispatch(list())
    
    /* this.isLoading = true; */
    /* this.addScrollData(data.results); */
    /* this.characterService.getCharacters().subscribe((data)=>{
      this.isLoading = false;
    }); */
  }
  
  getCharacterByName(){
    if(this.searchText.length <= 3){
      this.error = 'Please enter more than 3 characters';
      return;
    };
    this.error = '';
    this.isLoading = true;
    this.store.dispatch(search());
    /* this.addScrollData(data.results); */
    /* this.characterService.getCharacterByName(this.searchText).subscribe((data)=>{
      this.isLoading = false;
    },(error)=>{
      this.isLoading = false;
      this.error = this.searchText + ' not found';
      this.searchText = '';
    }); */
  }

  /* addScrollData(data: Character[]){
    this.characters = [];
    this.pendingCharacters= [];
    data.forEach((character, index)=>{
      if(index <= 7){
        this.characters.push(character);
        if(index == 7){
         this.count = this.count + 1;
        }
      }else{
        this.pendingCharacters.push(character);
      }
  });
  } */
}
