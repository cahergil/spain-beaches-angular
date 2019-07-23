import { Action } from '@ngrx/store';

export const SET_MAP_REGION = 'SET_MAP_REGION';

export class SetMapRegion implements Action {
  readonly type = SET_MAP_REGION;
  constructor(public payload: string) {}
}

export type MapActions = SetMapRegion;
