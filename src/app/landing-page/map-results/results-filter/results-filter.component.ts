import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducers';
import * as MapResultsFilterActions from '../results-filter/store/results-filter.actions';
// import * as fromresultsFilter from './store/results-filter.reducers';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-results-filter',
  templateUrl: './results-filter.component.html',
  styleUrls: ['./results-filter.component.scss']
})
export class ResultsFilterComponent implements OnInit {
  @Input() region: string;
  @Input() count: number;
  @Input() select: string;
  @Input() input: string;
  inputControl: FormControl;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.inputControl = new FormControl(this.input);
    this.onInputChanges();
  }

  onSelectionChange(value: string) {
    this.store.dispatch(new MapResultsFilterActions.SetMapFilterSelect(value));
    this.store.dispatch(new MapResultsFilterActions.SetMapFilterText(''));
  }
  onInputChanges() {
    this.inputControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.store.dispatch(new MapResultsFilterActions.SetMapFilterText(val));
      });
  }
}
