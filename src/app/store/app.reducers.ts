import * as StoreActions from './app.actions';

export interface State  {
  playas: any[];
}


const initialState: State = {
  playas: []
}

export function reducers(state = initialState, action: StoreActions.StoreActions) {

  switch (action.type) {
    case StoreActions.SET_BEACHES:
      return {
        ...state,
        playas: action.payload
      };
    default: return state;
  }


}


