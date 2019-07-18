import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsContentItemComponent } from './results-content-item.component';

describe('ResultsContentItemComponent', () => {
  let component: ResultsContentItemComponent;
  let fixture: ComponentFixture<ResultsContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
