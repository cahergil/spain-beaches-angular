import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, AfterViewInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable, fromEvent } from 'rxjs';

import { Playa } from '../playas.model';
import * as fromSearchReducer from './store/search.reducer';
import * as searchFiltersAction from './store/search.actions';
import * as fromApp from '../store/app.reducers';
import * as utilities from '../utils/utils';
import { map, filter, first, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public filters: fromSearchReducer.State;
  public actions: searchFiltersAction.SearchFiltersActions;
  public filteredList: Playa[] = [];
  public loading = true;
  private subscription: Subscription;
  public utils;
  public isMobile = false;
  constructor(private store: Store<fromApp.AppState>, private ref: ChangeDetectorRef) {
    this.catchMobileWidth();
  }

  catchMobileWidth() {
    const resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth)
      )
      .subscribe(width => {
        console.log(width);
        if (width <= 900) {
          this.isMobile = true;
        }
      });
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
    this.utils = utilities;
    this.subscription = this.store.select('searchFilters')
      .subscribe(valObj => {
        this.filters = valObj;
        const filterObject = {};
        if (this.filters.nudism) {
          filterObject['nudismo'] = this.utils.translateYesNoIntoSpanish(this.filters.nudism);
        }
        if (this.filters.blueFlag) {
          filterObject['bandera_azul'] = this.utils.translateYesNoIntoSpanish(this.filters.blueFlag);
        }
        if (this.filters.surfingArea) {
          filterObject['zona_surf'] = this.utils.translateYesNoIntoSpanish(this.filters.surfingArea);

        }
        if (this.filters.beachBar) {
          filterObject['establecimiento_comida'] = this.utils.translateYesNoIntoSpanish(this.filters.beachBar);

        }
        if (this.filters.nauticsRental) {
          filterObject['alquiler_nauticos'] = this.utils.translateYesNoIntoSpanish(this.filters.nauticsRental);

        }
        if (this.filters.divingArea) {
          filterObject['submarinismo'] = this.utils.translateYesNoIntoSpanish(this.filters.divingArea);

        }
        if (this.filters.sunbedRental) {
          filterObject['alquiler_hamacas'] = this.utils.translateYesNoIntoSpanish(this.filters.sunbedRental);

        }
        if (this.filters.beachUmbrellaRental) {
          filterObject['alquiler_sombrillas'] = this.utils.translateYesNoIntoSpanish(this.filters.beachUmbrellaRental);

        }
        if (this.filters.disabledPersons) {
          filterObject['acceso_discapacitados'] = this.utils.translateYesNoIntoSpanish(this.filters.disabledPersons);

        }
        if (this.filters.promenade) {
          filterObject['paseo_maritimo'] = this.utils.translateYesNoIntoSpanish(this.filters.promenade);

        }
        if (this.filters.occupancy !== 'All') {
          filterObject['grado_ocupacion'] = this.utils.translateOccupancyIntoSpanish(this.filters.occupancy);
        }
        if (this.filters.searchText.trim()) {
          filterObject[`${this.filters.selectText}`] = this.filters.searchText;
        }
        if (this.filters.hospitalDistance) {
          filterObject['distancia_hospital'] = this.filters.hospitalDistance;
        }
        if (this.filters.beachLength) {
          filterObject['longitud'] = this.filters.beachLength;
        }
        this.store.select('beachesList')
          .subscribe(beachesList => {
            const beaches = beachesList.beaches;
            this.filteredList = beaches.filter(beach => {
              const keys = Object.keys(filterObject);
              return keys.every(key => {
                if (key === 'termino_municipal' || key === 'nombre' || key === 'comunidad_autonoma') {
                  const regex = new RegExp('' + filterObject[key] + '', 'i');
                  return beach[key].match(regex);
                }
                if (key === 'distancia_hospital') {
                  let distance = beach[key];
                  if (!distance) {
                    distance = '30 Km';
                    // return false, there are almost 100 record not informed;
                  }
                  if (distance) {
                    if (distance === 'Al lado') {
                      distance = '0 Km';
                    }
                    return this.utils.includeDistance(distance, filterObject[key]);
                  }
                }
                if (key === 'longitud') {
                  let len = beach[key];
                  if (!len) {
                    len = '0 metros';
                  }
                  return this.utils.includeLength(len, filterObject[key]);
                }
                return beach[key] === filterObject[key];
              }); // key.every
            }); // filter
          });
      }); // first subscribe
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
