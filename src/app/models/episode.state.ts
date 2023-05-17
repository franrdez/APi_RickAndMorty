import { episodeModel } from "./episodeModel";

export interface episodeState{
  loading: boolean,
  char: Readonly<episodeModel>;
}
