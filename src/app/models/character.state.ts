import { CharacterModel } from "./characterModel";


export interface CharacterState{
  loading: boolean,
  char: Readonly<CharacterModel>;
}
