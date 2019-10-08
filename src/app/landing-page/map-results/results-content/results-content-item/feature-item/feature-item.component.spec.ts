import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItemComponent } from './feature-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FeatureItemComponent', () => {
  let component: FeatureItemComponent;
  let fixture: ComponentFixture<FeatureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the feature', () => {
    const feature = 'shower';
    component.feature = feature;
    fixture.detectChanges();
    const rootDiv: HTMLElement = fixture.debugElement.query(By.css('.root'))
      .nativeElement;
    const featureDiv = rootDiv.querySelector('div:nth-child(1)');
    expect(featureDiv.textContent).toContain(feature);

    // alternative
    // const deFeature = fixture.debugElement.query(By.css('div'));
    // const deFeature = fixture.debugElement.query(
    //   By.css('div.root div:nth-of-type(1)')
    // );
    // expect(deFeature.nativeElement.textContent).toContain(feature);
  });
});
