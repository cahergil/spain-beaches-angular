import * as LandingPageActions from './landing-page.actions';
import { Playa } from '../../playas.model';

export interface State  {
  beaches: Playa[];

}


const initialState: State = {
  beaches: [],

};

export function landingPageReducer(state = initialState, action: LandingPageActions.LangingPageActions) {

  switch (action.type) {
    case LandingPageActions.SET_BEACHES:
      return {
        ...state,
        beaches: [...action.payload]
      };

    default: return state;
  }


}


