import { Action } from '@ngrx/store';

export const SET_NUDISM = 'SET_NUDISM';
export const SET_BLUE_FLAG = 'SET_BLUE_FLAG';
export const SET_SURFING_AREA = 'SET_SURFING_AREA';
export const SET_BEACH_BAR = 'SET_BEACH_BAR';
export const SET_NAUTICS_RENTAL = 'SET_NAUTICS_RENTAL';
export const SET_DIVING_AREA = 'SET_DIVING_AREA';
export const SET_DISABLED_PERSONS = 'SET_DISABLED_PERSONS';
export const SET_OCCUPANCY = 'SET_OCCUPANCY';
export const SET_PROMENADE = 'SET_PROMENADE';
export const SET_HOSPITAL_DISTANCE = 'SET_HOSPITAL_DISTANCE';
export const SET_BEACH_LENGTH = 'SET_BEACH_LENGTH';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_UMBRELLA_BEACH_RENTAL = 'SET_UMBRELLA_BEACH_RENTAL';
export const SET_SUNBED_RENTAL = 'SET_SUNBED_RENTAL';
export const SET_SELECT_TEXT = 'SET_SELECT_TEXT';
export const SET_RESET_FILTERS = 'SET_RESET_FILTERS';


export class SetNudism implements Action {
  readonly type = SET_NUDISM;
  constructor(public payload: boolean) {}
}
export class SetBlueFlag implements Action {
  readonly type = SET_BLUE_FLAG;
  constructor(public payload: boolean) {}
}
export class SetSurfingArea implements Action {
  readonly type = SET_SURFING_AREA;
  constructor(public payload: boolean) {}
}
export class SetBeachBar implements Action {
  readonly type = SET_BEACH_BAR;
  constructor(public payload: boolean) {}
}
export class SetNauticsRental implements Action {
  readonly type = SET_NAUTICS_RENTAL;
  constructor(public payload: boolean) {}
}
export class SetDivingArea implements Action {
  readonly type = SET_DIVING_AREA;
  constructor(public payload: boolean) {}
}
export class SetDisabledPersons implements Action {
  readonly type = SET_DISABLED_PERSONS;
  constructor(public payload: boolean) {}
}
export class SetOccupancy implements Action {
  readonly type = SET_OCCUPANCY;
  constructor(public payload: string) {}
}
export class SetPromenade implements Action {
  readonly type = SET_PROMENADE;
  constructor(public payload: boolean) {}
}
export class SetHospitalDistance implements Action {
  readonly type = SET_HOSPITAL_DISTANCE;
  constructor(public payload: number) {}
}
export class SetBeachLength implements Action {
  readonly type = SET_BEACH_LENGTH;
  constructor(public payload: number) {}
}
export class SetUmbrellaBeachRental implements Action {
  readonly type = SET_UMBRELLA_BEACH_RENTAL;
  constructor(public payload: boolean) {}
}
export class SetSunBedRental implements Action {
  readonly type = SET_SUNBED_RENTAL;
  constructor(public payload: boolean) {}
}
export class SetSearchText implements Action {
  readonly type = SET_SEARCH_TEXT;
  constructor(public payload: string) { }
}
export class SetSelectText implements Action {
  readonly type = SET_SELECT_TEXT;
  constructor(public payload: string) {}
}
export class SetResetFilters implements Action {
  readonly type = SET_RESET_FILTERS;
  constructor() {}
}

export  type SearchFiltersActions = SetNudism
                            | SetBlueFlag
                            | SetSurfingArea
                            | SetBeachBar
                            | SetNauticsRental
                            | SetDivingArea
                            | SetDisabledPersons
                            | SetOccupancy
                            | SetPromenade
                            | SetHospitalDistance
                            | SetBeachLength
                            | SetSearchText
                            | SetUmbrellaBeachRental
                            | SetSunBedRental
                            | SetSelectText
                            | SetResetFilters;
