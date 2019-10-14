import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Playa } from 'src/app/playas.model';
import { tap, flatMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-results',
  templateUrl: './map-results.component.html',
  styleUrls: ['./map-results.component.scss']
})
export class MapResultsComponent implements OnInit {
  public region = '';
  private prevRegion = '';
  private REGION = 'region';
  public regionList: Playa[] = [];
  public filteredRegionList: Playa[] = [];
  public select: string;
  public input: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {
    // https://stackoverflow.com/questions/41138081/do-i-have-to-unsubscribe-from-activatedroute-e-g-params-observables
    this.route.params.subscribe(params => {
      if (params[this.REGION]) {
        // better place it here, else params[this.REGION] gives unexpected results, don't know why
        this.region = params[this.REGION];
        this.store
          .select(state => state.mapResultsFilter)
          .pipe(
            tap(filters => {
              if (this.region !== this.prevRegion) {
                this.select = 'termino_municipal';
                this.input = '';
              } else {
                this.select = filters.select;
                this.input = filters.input;
              }
              this.prevRegion = this.region;
            }),
            flatMap(filters => this.getBeaches())
          )
          .subscribe(beaches => {
            this.filteredRegionList = beaches;
          });
      }
    });
  }
  getBeaches(): Observable<Playa[]> {
    return this.store
      .select(state => state.beachesList.beaches)
      .pipe(
        filter(beachesList => beachesList.length > 0),
        // At this point, the obs emits a SINGLE array of items
        // tap(items => console.log(items)),
        map(beachesList =>
          beachesList.filter(beach => beach.comunidad_autonoma === this.region)
        ),
        tap(beachesList => (this.regionList = beachesList)),
        // I flatten the array so that the obs emits each item INDIVIDUALLY
        // from concatAll on we could use filter to filter individually and
        // after use toArray if we want again the array observable, but
        // toArray requires the stream to terminate(we could use for that take)
        // concatAll(),
        // At this point, the obs emits each item individually
        // tap(items => console.log(items)),
        map(beachesList => {
          if (!this.input.trim()) {
            return beachesList;
          } else {
            const regex = new RegExp('' + this.input + '', 'i');
            return beachesList.filter(beach =>
              beach[`${this.select}`].match(regex)
            );
          }
        })
      );
  }

  ngOnInit() {
    const resultId = document.getElementById('results');
    resultId.scrollIntoView({ behavior: 'smooth' });
  }
}
