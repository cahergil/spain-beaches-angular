import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersMobileComponent } from './search-filters-mobile.component';

describe('SearchFiltersMobileComponent', () => {
  let component: SearchFiltersMobileComponent;
  let fixture: ComponentFixture<SearchFiltersMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFiltersMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFiltersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
