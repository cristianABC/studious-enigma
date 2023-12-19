import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/character/character.model';

export const list = createAction('[List Component] List Characters');
export const search = createAction('[Search Component] Search Characters');
export const listLoadSuccess = createAction('[List Component] Characters Loaded Success', props<{characters:Character[]}>() );
export const listLoadFail = createAction('[List Component] Characters Loaded Fail');
