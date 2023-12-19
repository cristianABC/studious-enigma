import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { CharacterListComponent } from './character-list.component';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-card',
  template: '<div class="mock-character-card">{{ character.name }}</div>'
})
class MockCharacterCardComponent {
  @Input() character: Character;
}

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent, MockCharacterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character cards when characters input is provided', () => {
    component.characters = [
      { id:1, name: 'Rick', image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg', gender: 'male',  species:'humanoid' },
      { id: 2,name: 'Morty', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', gender: 'male',  species:'humanoid'},
      { id:3 ,name: 'Summer', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', gender: 'female', species:'humanoid' }
    ];
    fixture.detectChanges();

    const characterCards = fixture.nativeElement.querySelectorAll('.mock-character-card');
    expect(characterCards.length).toBe(3);
    expect(characterCards[0].textContent).toContain('Rick');
    expect(characterCards[1].textContent).toContain('Morty');
    expect(characterCards[2].textContent).toContain('Summer');
  });

  it('should not render character cards when characters input is not provided', () => {
    fixture.detectChanges();

    const characterCards = fixture.nativeElement.querySelectorAll('.mock-character-card');
    expect(characterCards.length).toBe(0);
  });
});

