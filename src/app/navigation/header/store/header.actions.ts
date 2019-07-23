import { Action } from '@ngrx/store';

export const SET_NAVIGATION_VISIBLE = 'SET_NAVIGATION_VISIBLE';
export class SetNavigationVisible implements Action {
  readonly type = SET_NAVIGATION_VISIBLE;
  constructor(public payload: boolean) {}
}


export type NavigationHeaderActions = SetNavigationVisible;
