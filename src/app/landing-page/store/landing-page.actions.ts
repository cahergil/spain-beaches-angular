import { Action } from '@ngrx/store';
import { Playa } from '../../playas.model';
export const SET_BEACHES = 'SET_BEACHES';


export class SetBeaches implements Action {
  readonly type = SET_BEACHES;
  constructor(public payload: Playa[]) {}
}


export type LangingPageActions = SetBeaches;
