import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterCardComponent } from './character/character-card/character-card.component';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './store/characters/characters.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ characters: characterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
