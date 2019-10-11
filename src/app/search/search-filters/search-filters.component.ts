import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSliderChange } from '@angular/material/slider';

import * as fromSearchReducer from '../store/search.reducer';
import * as searchFiltersAction from '../store/search.actions';
import * as fromApp from '../../store/app.reducers';
import * as utils from '../../utils/utils';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit, OnDestroy {
  @Input() filters: fromSearchReducer.State;

  public stateServices = false;
  public stateTypeOfBeach = false;
  public stateGeneral = false;

  subscriptionInputControl: Subscription;
  subscriptionBeachLenghtControl: Subscription;
  inputControl: FormControl;
  beachLengthSliderControl: FormControl;
  hospitalDistanceControl: FormControl;
  beachLengthSliderValue: number;
  hospitalDistanceSliderValue: number;
  public utils;
  positionSlider: number;

  constructor(
    private ref: ChangeDetectorRef,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.utils = utils;
    this.inputControl = new FormControl(this.filters.searchText);
    this.beachLengthSliderControl = new FormControl(this.filters.beachLength);
    this.hospitalDistanceControl = new FormControl(
      this.filters.hospitalDistance
    );
    this.beachLengthSliderValue = utils.logPositionSlider(
      this.filters.beachLength
    );
    this.hospitalDistanceSliderValue = this.filters.hospitalDistance;
    this.onInputChanges();
    this.onLengthSliderChange();
    this.onHospitalDistanceSliderChange();
  }

  checkBoxHandler = (event: MatCheckboxChange, name: string) => {
    if (name === 'nudism') {
      this.store.dispatch(new searchFiltersAction.SetNudism(event.checked));
    } else if (name === 'blueFlag') {
      this.store.dispatch(new searchFiltersAction.SetBlueFlag(event.checked));
    } else if (name === 'surfingArea') {
      this.store.dispatch(
        new searchFiltersAction.SetSurfingArea(event.checked)
      );
    } else if (name === 'beachBar') {
      this.store.dispatch(new searchFiltersAction.SetBeachBar(event.checked));
    } else if (name === 'nauticsRental') {
      this.store.dispatch(
        new searchFiltersAction.SetNauticsRental(event.checked)
      );
    } else if (name === 'divingArea') {
      this.store.dispatch(new searchFiltersAction.SetDivingArea(event.checked));
    } else if (name === 'sunbedRental') {
      this.store.dispatch(
        new searchFiltersAction.SetSunBedRental(event.checked)
      );
    } else if (name === 'beachUmbrellaRental') {
      this.store.dispatch(
        new searchFiltersAction.SetUmbrellaBeachRental(event.checked)
      );
    } else if (name === 'promenade') {
      this.store.dispatch(new searchFiltersAction.SetPromenade(event.checked));
    } else if (name === 'disabledPersons') {
      this.store.dispatch(
        new searchFiltersAction.SetDisabledPersons(event.checked)
      );
    }
  };

  handleClick(name: string) {
    if (name === 'services') {
      this.stateServices = !this.stateServices;
      if (this.stateServices) {
        this.stateGeneral = false;
        this.stateTypeOfBeach = false;
      }
    } else if (name === 'typeOfBeach') {
      this.stateTypeOfBeach = !this.stateTypeOfBeach;
      if (this.stateTypeOfBeach) {
        this.stateServices = false;
        this.stateGeneral = false;
      }
    } else if (name === 'general') {
      this.stateGeneral = !this.stateGeneral;
      if (this.stateGeneral) {
        this.stateServices = false;
        this.stateTypeOfBeach = false;
      }
    }
    this.ref.detectChanges();
  }
  setActiveTypeOfBeachMenu() {
    const classes = {
      notActiveTypeOfBeach: !this.stateTypeOfBeach
    };
    return classes;
  }
  setActiveServicesMenu() {
    const classes = {
      notActiveServices: !this.stateServices
    };
    return classes;
  }
  setActiveGeneralMenu() {
    const classes = {
      notActiveGeneral: !this.stateGeneral
    };
    return classes;
  }

  onSelectionChange(value: string) {
    this.store.dispatch(new searchFiltersAction.SetSelectText(value));
    this.store.dispatch(new searchFiltersAction.SetSearchText(''));
  }
  onOccupancyChange(value: string) {
    this.store.dispatch(new searchFiltersAction.SetOccupancy(value));
  }

  // change observables
  onInputChanges() {
    this.subscriptionInputControl = this.inputControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.store.dispatch(new searchFiltersAction.SetSearchText(val));
      });
  }
  onLengthSliderChange() {
    this.beachLengthSliderControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(newValue => {
        const value = Math.round(utils.logarithmicSlider(newValue));
        console.log(value);
        this.store.dispatch(new searchFiltersAction.SetBeachLength(value));
      });
  }
  onHospitalDistanceSliderChange() {
    this.hospitalDistanceControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(newValue => {
        this.store.dispatch(
          new searchFiltersAction.SetHospitalDistance(newValue)
        );
      });
  }

  // change slider handlers
  onChangeSliderBeachLength(event: MatSliderChange) {
    this.beachLengthSliderValue = event.value;
  }
  onChangeSliderHospitalDistance(event: MatSliderChange) {
    this.hospitalDistanceSliderValue = event.value;
  }
  handleOnReset() {
    this.stateGeneral = false;
    this.stateServices = false;
    this.stateTypeOfBeach = false;
    this.store.dispatch(new searchFiltersAction.SetResetFilters());
  }

  ngOnDestroy() {
    if (this.subscriptionBeachLenghtControl) {
      this.subscriptionBeachLenghtControl.unsubscribe();
    }
  }
}
