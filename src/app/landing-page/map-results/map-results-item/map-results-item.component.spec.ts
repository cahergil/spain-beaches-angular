import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapResultsItemComponent } from './map-results-item.component';

describe('MapResultsItemComponent', () => {
  let component: MapResultsItemComponent;
  let fixture: ComponentFixture<MapResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapResultsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
