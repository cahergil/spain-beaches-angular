import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsContentComponent } from './results-content.component';

describe('ResultsContentComponent', () => {
  let component: ResultsContentComponent;
  let fixture: ComponentFixture<ResultsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
