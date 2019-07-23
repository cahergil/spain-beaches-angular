import * as mapActions from './map.actions';

export interface State {
  region: string;
}

const initialState: State = {
  region: ''
};


export const mapRegionReducer = (state = initialState, action: mapActions.MapActions) => {
  switch (action.type) {
    case mapActions.SET_MAP_REGION:
      return {
        ...state,
        region: action.payload
      };
    default: return state;
  }
};
