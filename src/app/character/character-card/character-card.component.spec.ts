import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { CharacterCardComponent } from "./character-card.component";
import { Character } from "../character.model";


describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character information correctly', () => {
    const character: Character = {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };

    component.character = character;
    fixture.detectChanges();

    const characterElement: HTMLElement = fixture.nativeElement.querySelector('.character');
    const imageElement: HTMLImageElement = characterElement.querySelector('img');
    const nameElement: HTMLElement = characterElement.querySelector('.character_info span:nth-child(1)');
    const speciesElement: HTMLElement = characterElement.querySelector('.character_info span:nth-child(2)');
    const genderElement: HTMLElement = characterElement.querySelector('.character_info span:nth-child(3)');

    expect(imageElement.src).toBe(character.image);
    expect(imageElement.alt).toBe(character.id.toString());
    expect(nameElement.textContent).toBe(character.name);
    expect(speciesElement.textContent).toBe(character.species);
    expect(genderElement.textContent).toBe(character.gender);
  });
});
