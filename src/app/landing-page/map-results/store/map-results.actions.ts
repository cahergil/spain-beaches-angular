import { Action } from '@ngrx/store';
import { Playa } from '../../../playas.model';

export const SET_BEACHES_REGION = 'SET_BEACHES_REGION';


export class SetBeachesRegion implements Action {
  readonly type = SET_BEACHES_REGION;
  constructor(public payload: Playa[]) { }
}

export type MapResultsActions =  SetBeachesRegion;
