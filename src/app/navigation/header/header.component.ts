import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducers';
import * as regionMapActions from '../../landing-page/map/store/map.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navigationVisible$: Observable<{ navigationVisible: boolean }>;
  @Output() sidenavToggle = new EventEmitter<void>();
  public isDetails = false;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router // private location: Location
  ) {}

  ngOnInit() {
    // solution 1
    // import { Location } from '@angular/common';
    // in constructor: // private location: Location
    // console.log(this.router.url);
    // if (this.location.path().startsWith('/details')) {
    //   console.log('details: true');
    //   this.isDetails = true;
    // }

    // solution 2: the best
    // https://medium.com/@nsrathore/router-event-handling-angular-5-5-2-0-723bfe39cdf1
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        if (navEnd.urlAfterRedirects.startsWith('/details')) {
          this.isDetails = true;
        } else {
          this.isDetails = false;
        }
      });
    // solution 3:
    // in case gh-page doesn't work with the above method
    // this.navigationVisible$ = this.store.select('navigation');
    // * ngIf="(navigationVisible$ | async).navigationVisible"
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
