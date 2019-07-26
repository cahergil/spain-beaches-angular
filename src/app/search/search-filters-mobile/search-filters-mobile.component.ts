import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSearchReducer from '../store/search.reducer';
import * as fromApp from '../../store/app.reducers';
import * as searchFiltersAction from '../store/search.actions';

@Component({
  selector: 'app-search-filters-mobile',
  templateUrl: './search-filters-mobile.component.html',
  styleUrls: ['./search-filters-mobile.component.scss']
})
export class SearchFiltersMobileComponent implements OnInit {

  @Input() filters: fromSearchReducer.State;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

}
