import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromLandingPageReducer from './landing-page/store/landing-page.reducers';
import * as fromActions from './landing-page/store/landing-page.actions';
import { Playa } from './playas.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playas-angular';
  private list: Playa[] = [];
  private jsonUrl = './assets/playas.json';

  constructor(
    private httpClient: HttpClient,
    private store: Store<fromLandingPageReducer.State>
  ) {}

  ngOnInit() {
    this.httpClient.get(this.jsonUrl).subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach(element => {
          const obj = response[element];
          this.list.push(obj);
        });
        this.store.dispatch(new fromActions.SetBeaches(this.list));
      },
      err => {
        console.log(err);
      }
    );
  }
}
