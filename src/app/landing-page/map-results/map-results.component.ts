import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Playa } from 'src/app/playas.model';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-map-results',
  templateUrl: './map-results.component.html',
  styleUrls: ['./map-results.component.scss']
})
export class MapResultsComponent implements OnInit, OnDestroy {

  public region: string;
  private REGION = 'region';
  private start: number;
  private end: number;
  private step: number;
  // private beachesListObservable: Observable<{beaches: Playa[]}>;
  private subscription: Subscription;
  public regionList: Playa[] = [];
  public regionListScroll: Playa[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private scrollDispatcher: ScrollDispatcher,
    private ref: ChangeDetectorRef) {
    // https://stackoverflow.com/questions/44516017/how-to-handle-window-scroll-event-in-angular-4/54005183#54005183
    // https://material.angular.io/cdk/scrolling/overview
    this.scrollDispatcher.scrolled().subscribe((x: CdkScrollable) => {
      const val = x.measureScrollOffset('bottom');
      if (val < 100) {
        this.onScroll();
      }
    });

    this.route.params.subscribe(params => {
      if (params[this.REGION]) {
        this.region = params[this.REGION];
        console.log(this.region);
        this.subscription = this.store.select('beachesList')
          .subscribe(results => {
            this.regionList = results.beaches.filter(el => el.comunidad_autonoma === this.region
            );
            this.start = 0;
            this.end = 20;
            this.step = 20;
            this.regionListScroll = this.regionList.slice(this.start, this.end);
            this.start = this.end;
            this.end += this.step;
            console.log(this.regionListScroll.length);
          });

      }
    });

  }
  ngOnInit() {


  }

  onScroll(): void {
    this.regionListScroll = [...this.regionListScroll, ...this.regionList.slice(this.start, this.end)];
    setTimeout(() => {
      this.ref.detectChanges();
    }, 500);
    this.start = this.end;
    this.end += this.step;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
