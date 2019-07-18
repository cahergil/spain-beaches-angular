import * as fromMapResults from '../landing-page/map-results/store/map-results.reducers';
import * as fromLandingPage from '../landing-page/store/landing-page.reducers';
import * as fromResultsFilter from '../landing-page/map-results/results-filter/store/results-filter.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  beachesRegionList: fromMapResults.State;
  beachesList: fromLandingPage.State;
  mapResultsFilter: fromResultsFilter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  beachesRegionList: fromMapResults.mapResultsreducers,
  beachesList: fromLandingPage.landingPageReducers,
  mapResultsFilter: fromResultsFilter.resultsFilterreducers
};

