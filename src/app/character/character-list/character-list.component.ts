import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent{
  @Input()characters: Character[];
}
