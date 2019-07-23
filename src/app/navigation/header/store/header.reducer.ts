import * as navigationHeaderActions from './header.actions';

export interface State  {
  navigationVisible: boolean;
}

const initialState: State = {
  navigationVisible: true
};

export const navigationHeaderReducer = (state = initialState, action: navigationHeaderActions.NavigationHeaderActions) => {
  switch (action.type) {
    case navigationHeaderActions.SET_NAVIGATION_VISIBLE:
      return {
        ...state,
        navigationVisible: action.payload
      };
    default:
      return state;
  }

};
