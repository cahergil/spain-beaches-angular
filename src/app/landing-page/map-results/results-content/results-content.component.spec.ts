import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsContentComponent } from './results-content.component';
import { Playa } from 'src/app/playas.model';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  SimpleChange,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { ResultsContentItemComponent } from './results-content-item/results-content-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultsContentComponent', () => {
  let component: ResultsContentComponent;
  let fixture: ComponentFixture<ResultsContentComponent>;
  let regionalBeachesList: Playa[];
  let beachesList: Playa[];
  beforeAll(async () => {
    try {
      const response = await fetch('../../../../assets/playas.json');
      beachesList = await response.json();
      regionalBeachesList = beachesList.filter(
        (b: Playa) => b.comunidad_autonoma === 'Cantabria'
      );
    } catch (error) {
      console.log(error);
    }
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsContentComponent, ResultsContentItemComponent],
      // ResultContentItem image directive, not ok with CUSTOM_ELEMENTS_SCHEMA
      schemas: [NO_ERRORS_SCHEMA],
      // ResultContentItem has a router.navigate
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.list = regionalBeachesList;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should show correct lengths in shows', () => {
    component.list = regionalBeachesList;
    fixture.detectChanges();
    component.ngOnChanges({
      list: {
        previousValue: [],
        currentValue: regionalBeachesList,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    // without this line fails the partial check
    fixture.detectChanges();
    const partialSpan = fixture.debugElement.query(
      By.css('.results__showing span:nth-child(1)')
    );
    const totalSpan = fixture.debugElement.query(
      By.css('.results__showing span:nth-child(2)')
    );
    expect(partialSpan.nativeElement.textContent).toContain(
      component.getStep()
    );
    expect(totalSpan.nativeElement.textContent).toContain(
      component.list.length
    );
  });
  it('should render first 20(step) beaches of the beaches list', () => {
    component.list = regionalBeachesList;
    fixture.detectChanges();
    component.ngOnChanges({
      list: {
        previousValue: [],
        currentValue: regionalBeachesList,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    // necessary to detect ngOnChanges
    fixture.detectChanges();
    const dEls = fixture.debugElement.queryAll(
      By.directive(ResultsContentItemComponent)
    );
    const fakeBeaches = regionalBeachesList.slice(0, 20);
    for (let i = 0; i < fakeBeaches.length; i++) {
      expect(dEls[i].componentInstance.beachItem).toEqual(fakeBeaches[i]);
    }
  });
});
