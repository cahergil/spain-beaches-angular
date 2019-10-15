import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({ selector: 'app-map', template: '<div></div>' })
class AppMapStubComponent {}

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent, AppMapStubComponent],
      // for router-outlet
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a router-outlet', () => {
    const deRouterOutlet = fixture.debugElement.query(
      By.directive(RouterOutlet)
    );
    expect(deRouterOutlet).not.toBeNull();
  });
});
