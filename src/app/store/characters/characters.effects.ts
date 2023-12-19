import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CharacterService } from "src/app/character/character.service";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from "rxjs";

@Injectable()
export class CharactersEffects {
    
    loadCharacters$ = createEffect(()=> 
        this.actions$.pipe(
            ofType('[List Component] List Characters'),
            mergeMap(()=> this.characterService.getCharacters().pipe(
                map(characters => ({
                    type: '[List Component] Characters Loaded Success', payload: characters
                })),
                catchError(() => of({ type: '[List Component] Characters Loaded Fail' }))
            ))
        )
    )

    constructor(
        private actions$: Actions,
        private characterService: CharacterService
    ){}
}
