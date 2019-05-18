import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
// import * as fromLanding from '../landing-page.reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take, mergeMap, toArray } from 'rxjs/operators'
import { Playa } from 'src/app/playas.model';

@Component({
  selector: 'app-map-results',
  templateUrl: './map-results.component.html',
  styleUrls: ['./map-results.component.scss']
})
export class MapResultsComponent implements OnInit, OnDestroy {

  private region: string;
  private CONST_REGION = 'region';
  // private beachesListObservable: Observable<{beaches: Playa[]}>;
  private subscription: Subscription;
  public regionList: Playa[] = [];


  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>) {

    this.route.params.subscribe(params => {
      if (params[this.CONST_REGION]) {
        this.region = params[this.CONST_REGION];
        console.log(this.region);
        this.subscription = this.store.select('beachesList')
          .subscribe(results => {
            this.regionList = results.beaches.filter(el => el.comunidad_autonoma === this.region
            );
            console.log(this.regionList);
          });

      }
    });

  }
  ngOnInit() {


  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
