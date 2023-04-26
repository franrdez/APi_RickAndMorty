import { AppState } from "src/app/app.state";
import { CharacterState } from "src/app/models/character.state";
import { createSelector } from '@ngrx/store';

export const selectCharacterByName = (state: AppState) => state.char;

export const selectChar = createSelector(
  selectCharacterByName,
  (state: CharacterState) => state.char
);
