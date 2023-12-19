import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent  {
  @Input() character: Character; 
  constructor() { }
}
