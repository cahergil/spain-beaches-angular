import * as fromMapResults from '../landing-page/map-results/map-results.reducers';
import * as fromLandingPage from '../landing-page/landing-page.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  beachesRegionList: fromMapResults.State;
  beachesList: fromLandingPage.State;
}

export const reducers: ActionReducerMap<AppState> = {
  beachesRegionList: fromMapResults.mapResultsreducers,
  beachesList: fromLandingPage.landingPageReducers
}
