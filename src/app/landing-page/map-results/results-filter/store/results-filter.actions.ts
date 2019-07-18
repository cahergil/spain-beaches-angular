import { Action } from '@ngrx/store';

export const SET_MAP_FILTERS_SELECT = 'SET_MAP_FILTERS_SELECT';
export const SET_MAP_FILTERS_TEXT = 'SET_MAP_FILTERS_TEXT';

export class SetMapFilterSelect implements Action {
  readonly type = SET_MAP_FILTERS_SELECT;
  constructor(public payload: string) {}

}

export class SetMapFilterText implements Action {
  readonly type = SET_MAP_FILTERS_TEXT;
  constructor(public payload: string) {}
}

export type ResultsFilterActions = SetMapFilterSelect | SetMapFilterText;
