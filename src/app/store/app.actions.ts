import { Action } from '@ngrx/store';

export const SET_BEACHES = 'SET_BEACHES';

export class SetBeaches implements Action {
  readonly type = SET_BEACHES;
  constructor(public payload: any[]) {}
}

export type StoreActions = SetBeaches;
