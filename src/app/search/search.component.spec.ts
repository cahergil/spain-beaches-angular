import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ResultsContentComponent } from '../landing-page/map-results/results-content/results-content.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { SearchFiltersMobileComponent } from './search-filters-mobile/search-filters-mobile.component';
import { DrawerComponent } from './search-filters-mobile/drawer/drawer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.reducers';
import { Playa } from '../playas.model';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  // beforeAll(async () => {
  //   const response = await fetch('../../assets/playas.json');
  //   const list: Playa[] = await response.json();

  // });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        MockComponent(ResultsContentComponent),
        MockComponent(SearchFiltersComponent),
        MockComponent(SearchFiltersMobileComponent),
        MockComponent(DrawerComponent)
      ],
      imports: [
        MaterialModule,
        FlexLayoutModule,
        StoreModule.forRoot(reducers),
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
