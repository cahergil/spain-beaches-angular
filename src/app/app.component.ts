import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromLandingPageReducer from './landing-page/store/landing-page.reducers';
import * as fromActions from './landing-page/store/landing-page.actions';
import { Playa } from './playas.model';
import { BeachesService } from './beaches.service';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playas-angular';
  private jsonUrl = './assets/playas.json';
  // testing
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private beachesService: BeachesService,
    private store: Store<fromLandingPageReducer.State>
  ) {}

  ngOnInit() {
    this.beachesService.getBeachesFromJson(this.jsonUrl).subscribe(
      (response: Playa[]) => {
        this.store.dispatch(new fromActions.SetBeaches(response));
      },
      err => {
        console.log(err);
      }
    );
  }
}
