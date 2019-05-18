import * as MapResultsActions from './map-results.actions';
import { Playa } from '../../playas.model';

export interface State {
  beachesRegion: Playa[];
}


const initialState: State = {

  beachesRegion: []
};

export function mapResultsreducers(state = initialState, action: MapResultsActions.MapResultsActions) {

  switch (action.type) {
    case MapResultsActions.SET_BEACHES_REGION:
      return {
        ...state,
        beachesRegion: action.payload
      };
    default: return state;
  }


}
