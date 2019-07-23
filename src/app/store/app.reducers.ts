import { ActionReducerMap } from '@ngrx/store';

import * as fromMapResults from '../landing-page/map-results/store/map-results.reducers';
import * as fromLandingPage from '../landing-page/store/landing-page.reducers';
import * as fromResultsFilter from '../landing-page/map-results/results-filter/store/results-filter.reducers';
import * as fromNavigation from '../navigation/header/store/header.reducer';

export interface AppState {
  beachesRegionList: fromMapResults.State;
  beachesList: fromLandingPage.State;
  mapResultsFilter: fromResultsFilter.State;
  navigation: fromNavigation.State;
}

export const reducers: ActionReducerMap<AppState> = {
  beachesRegionList: fromMapResults.mapResultsReducer,
  beachesList: fromLandingPage.landingPageReducer,
  mapResultsFilter: fromResultsFilter.resultsFilterReducer,
  navigation: fromNavigation.navigationHeaderReducer
};

