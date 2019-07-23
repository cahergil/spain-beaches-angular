import * as ResultsFilterActions from './results-filter.actions';

export interface State {
  select: string;
  input: string;
}

const initialState: State = {
  select: 'termino_municipal',
  input: ''
};

export function resultsFilterReducer(state = initialState, action: ResultsFilterActions.ResultsFilterActions) {
  switch (action.type) {
    case ResultsFilterActions.SET_MAP_FILTERS_SELECT:
      return {
        ...state,
        select: action.payload
      };
    case ResultsFilterActions.SET_MAP_FILTERS_TEXT:
      return {
        ...state,
        input: action.payload
      };
    default: return state;
  }
}
