import * as searchFiltersActions from './search.actions';

export interface State {
  nudism: boolean;
  blueFlag: boolean;
  surfingArea: boolean;
  beachBar: boolean;
  nauticsRental: boolean;
  divingArea: boolean;
  sunbedRental: boolean;
  beachUmbrellaRental: boolean;
  disabledPersons: boolean;
  occupancy: string;
  promenade: boolean;
  hospitalDistance: number;
  beachLength: number;
  selectText: string;
  searchText: string;
}

const initialState: State = {
  nudism: false,
  blueFlag: false,
  surfingArea: false,
  beachBar: false,
  nauticsRental: false,
  divingArea: false,
  sunbedRental: false,
  beachUmbrellaRental: false,
  disabledPersons: false,
  occupancy: 'All',
  promenade: false,
  hospitalDistance: 120,
  beachLength: 28000,
  selectText: 'termino_municipal',
  searchText: ''
};

export function searchFiltersReducer(
  state = initialState,
  actions: searchFiltersActions.SearchFiltersActions
) {
  switch (actions.type) {
    case searchFiltersActions.SET_NUDISM:
      return {
        ...state,
        nudism: actions.payload
      };
    case searchFiltersActions.SET_BLUE_FLAG:
      return {
        ...state,
        blueFlag: actions.payload
      };
    case searchFiltersActions.SET_SURFING_AREA:
      return {
        ...state,
        surfingArea: actions.payload
      };
    case searchFiltersActions.SET_BEACH_BAR:
      return {
        ...state,
        beachBar: actions.payload
      };
    case searchFiltersActions.SET_NAUTICS_RENTAL:
      return {
        ...state,
        nauticsRental: actions.payload
      };
    case searchFiltersActions.SET_DIVING_AREA:
      return {
        ...state,
        divingArea: actions.payload
      };
    case searchFiltersActions.SET_SUNBED_RENTAL:
      return {
        ...state,
        sunbedRental: actions.payload
      };
    case searchFiltersActions.SET_UMBRELLA_BEACH_RENTAL:
      return {
        ...state,
        beachUmbrellaRental: actions.payload
      };
    case searchFiltersActions.SET_DISABLED_PERSONS:
      return {
        ...state,
        disabledPersons: actions.payload
      };
    case searchFiltersActions.SET_OCCUPANCY:
      return {
        ...state,
        occupancy: actions.payload
      };
    case searchFiltersActions.SET_PROMENADE:
      return {
        ...state,
        promenade: actions.payload
      };
    case searchFiltersActions.SET_HOSPITAL_DISTANCE:
      return {
        ...state,
        hospitalDistance: actions.payload
      };
    case searchFiltersActions.SET_BEACH_LENGTH:
      return {
        ...state,
        beachLength: actions.payload
      };
    case searchFiltersActions.SET_SELECT_TEXT:
      return {
        ...state,
        selectText: actions.payload
      };
    case searchFiltersActions.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: actions.payload
      };
    case searchFiltersActions.SET_RESET_FILTERS:
      return {
        ...state,
        nudism: false,
        blueFlag: false,
        surfingArea: false,
        beachBar: false,
        nauticsRental: false,
        divingArea: false,
        sunbedRental: false,
        beachUmbrellaRental: false,
        disabledPersons: false,
        occupancy: 'All',
        promenade: false,
        hospitalDistance: 120,
        beachLength: 28000,
        selectText: 'termino_municipal',
        searchText: ''
      };
    default:
      return state;
  }
}
