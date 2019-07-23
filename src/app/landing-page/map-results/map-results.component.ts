import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Playa } from 'src/app/playas.model';


@Component({
  selector: 'app-map-results',
  templateUrl: './map-results.component.html',
  styleUrls: ['./map-results.component.scss']
})
export class MapResultsComponent implements OnInit, OnDestroy {

  public region: string;
  private REGION = 'region';

  // private beachesListObservable: Observable<{beaches: Playa[]}>;
  private subscription: Subscription;
  public regionList: Playa[] = [];
  public filteredRegionList: Playa[] = [];
  public select: string;
  public text: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    ) {

    this.route.params.subscribe(params => {
      if (params[this.REGION]) {
        this.region = params[this.REGION];
        // console.log(this.region);
        this.subscription = this.store.select('beachesList')
          .subscribe(results => {
            this.regionList = results.beaches.filter(el => el.comunidad_autonoma === this.region
            );
            this.store.select('mapResultsFilter').subscribe(data => {
              // console.log(data);

              if (params[this.REGION] !== this.region) {
                this.select = 'termino_municipal';
                this.text = '';
              } else {
                this.select = data.select;
                this.text = data.input;
              }
              if (!this.text.trim()) {
                this.filteredRegionList = this.regionList;
              } else {
                const regex = new RegExp('' + this.text + '', 'i');
                this.filteredRegionList = this.regionList.filter(beach => beach[`${this.select}`].match(regex));
              }

            });
        });

      }
    });

  }
  ngOnInit() {
    const resultId = document.getElementById('results');
    resultId.scrollIntoView({ behavior: 'smooth' });

  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
