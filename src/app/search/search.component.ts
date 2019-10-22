import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable, fromEvent } from 'rxjs';

import { Playa } from '../playas.model';
import * as fromSearchReducer from './store/search.reducer';
import * as searchFiltersAction from './store/search.actions';
import * as fromApp from '../store/app.reducers';
import * as utilities from '../utils/utils';
import {
  map,
  distinctUntilChanged,
  startWith,
  tap,
  concatMap,
  filter,
  flatMap
} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public filters: fromSearchReducer.State;
  private filterObject = {};
  public actions: searchFiltersAction.SearchFiltersActions;
  public filteredList: Playa[] = [];
  public loading = true;
  private subscription: Subscription;
  private resizeSubscription: Subscription;
  public utils;
  public isMobile = false;
  public video500 = false;
  public video900 = false;

  private mappings = {
    nudism: 'nudismo',
    flueFlag: 'bandera_azul',
    surf: 'zona_surf',
    beachBar: 'establecimiento_comida',
    nautics: 'alquiler_nauticos',
    submarinism: 'submarinismo',
    sunbedRental: 'alquiler_hamacas',
    beachUmbrellaRental: 'alquiler_sombrillas',
    disabledPersons: 'acceso_discapacitados',
    promenade: 'paseo_maritimo',
    occupancy: 'grado_ocupacion',
    hospitalDistance: 'distancia_hospital',
    beachLength: 'longitud'
  };
  constructor(private store: Store<fromApp.AppState>) {
    this.catchMobileWidth();
  }

  catchMobileWidth() {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        // debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth)
      )
      .subscribe(width => {
        if (width <= 500) {
          this.video500 = true;
          this.isMobile = true;
          this.video900 = false;
        } else if (width <= 900) {
          this.isMobile = true;
          this.video500 = false;
          this.video900 = true;
        } else {
          this.isMobile = false;
          this.video500 = false;
          this.video900 = false;
        }
      });
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
    this.utils = utilities;
    this.subscription = this.store
      .select('searchFilters')
      .pipe(
        tap(() => (this.filterObject = {})),
        tap((obj: fromSearchReducer.State) => {
          this.filters = obj;
          if (this.filters.nudism) {
            this.filterObject[
              this.mappings.nudism
            ] = this.utils.translateYesNoIntoSpanish(this.filters.nudism);
          }
          if (this.filters.blueFlag) {
            this.filterObject[
              this.mappings.flueFlag
            ] = this.utils.translateYesNoIntoSpanish(this.filters.blueFlag);
          }
          if (this.filters.surfingArea) {
            this.filterObject[
              this.mappings.surf
            ] = this.utils.translateYesNoIntoSpanish(this.filters.surfingArea);
          }
          if (this.filters.beachBar) {
            this.filterObject[
              this.mappings.beachBar
            ] = this.utils.translateYesNoIntoSpanish(this.filters.beachBar);
          }
          if (this.filters.nauticsRental) {
            this.filterObject[
              this.mappings.nautics
            ] = this.utils.translateYesNoIntoSpanish(
              this.filters.nauticsRental
            );
          }
          if (this.filters.divingArea) {
            this.filterObject[
              this.mappings.submarinism
            ] = this.utils.translateYesNoIntoSpanish(this.filters.divingArea);
          }
          if (this.filters.sunbedRental) {
            this.filterObject[
              this.mappings.sunbedRental
            ] = this.utils.translateYesNoIntoSpanish(this.filters.sunbedRental);
          }
          if (this.filters.beachUmbrellaRental) {
            this.filterObject[
              this.mappings.beachUmbrellaRental
            ] = this.utils.translateYesNoIntoSpanish(
              this.filters.beachUmbrellaRental
            );
          }
          if (this.filters.disabledPersons) {
            this.filterObject[
              this.mappings.disabledPersons
            ] = this.utils.translateYesNoIntoSpanish(
              this.filters.disabledPersons
            );
          }
          if (this.filters.promenade) {
            this.filterObject[
              this.mappings.promenade
            ] = this.utils.translateYesNoIntoSpanish(this.filters.promenade);
          }
          if (this.filters.occupancy !== 'All') {
            this.filterObject[
              this.mappings.occupancy
            ] = this.utils.translateOccupancyIntoSpanish(
              this.filters.occupancy
            );
          }
          if (this.filters.searchText.trim()) {
            this.filterObject[
              `${this.filters.selectText}`
            ] = this.filters.searchText;
          }
          if (this.filters.hospitalDistance) {
            this.filterObject[
              this.mappings.hospitalDistance
            ] = this.filters.hospitalDistance;
          }
          if (this.filters.beachLength) {
            this.filterObject[
              this.mappings.beachLength
            ] = this.filters.beachLength;
          }
        }),
        flatMap(() => this.applyFiltersToBeachList(this.filterObject))
      )
      .subscribe(filteredList => (this.filteredList = filteredList));
  }

  applyFiltersToBeachList(filterObject): Observable<Playa[]> {
    return this.store.select('beachesList', 'beaches').pipe(
      map(beaches => {
        return beaches.filter((beach: Playa) => {
          const keys = Object.keys(filterObject);
          return keys.every(key => {
            if (
              key === 'termino_municipal' ||
              key === 'nombre' ||
              key === 'comunidad_autonoma'
            ) {
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
        });
      })
    );
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
