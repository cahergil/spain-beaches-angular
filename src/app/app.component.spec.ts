// for viewport variable to be recognized
/// <reference types="karma-viewport" />
import {
  TestBed,
  async,
  ComponentFixture,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { MockComponents } from 'ng-mocks';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router, Routes } from '@angular/router';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BeachesService } from './beaches.service';
import { Playa } from './playas.model';
import { reducers } from './store/app.reducers';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  template: ''
})
export class SearchComponent {}
@Component({
  selector: 'app-about',
  template: ''
})
export class AboutComponent {}

@Component({
  selector: 'app-landing-page',
  template: ''
})
export class LandingPageComponent {}
const routes: Routes = [
  { path: 'spain-map', component: LandingPageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let beachesList: Playa[];
  let MockBeachesService;

  beforeAll(async () => {
    const response = await fetch('../assets/playas.json');
    beachesList = await response.json();
    MockBeachesService = {
      getBeachesFromJson: (
        url: string = './assets/playas.json'
      ): Observable<Playa[]> => {
        return of(beachesList);
      }
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SidenavListComponent,
        LandingPageComponent,
        SearchComponent,
        AboutComponent
        // MockComponents(SidenavListComponent)
        // MockComponents(SidenavListComponent, HeaderComponent)
      ],
      imports: [
        StoreModule.forRoot(reducers),
        MaterialModule,
        RouterTestingModule.withRoutes(routes),
        NoopAnimationsModule,
        FlexLayoutModule
      ],
      providers: [
        {
          provide: BeachesService,
          useValue: MockBeachesService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should dispatch action in ngOnInit', () => {
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should open the sidenav when clicking burger icon in toolbar', async () => {
    viewport.set(599);
    fixture.detectChanges();
    // const headerComponent: HeaderComponent = fixture.debugElement.query(
    //   By.directive(HeaderComponent)
    // ).componentInstance;
    // expect(component.sidenav.opened).toBe(false);
    // headerComponent.sidenavToggle.emit();
    // await fixture.whenStable();
    expect(component.sidenav.opened).toBe(false);
    const childDe = fixture.debugElement.query(By.directive(HeaderComponent));
    const buttonDe = childDe.query(
      By.css('mat-toolbar > div:nth-child(1) > button')
    );
    buttonDe.nativeElement.click();
    await fixture.whenStable();
    expect(component.sidenav.opened).toBe(true);
  });
  it('should close the sidenav when clicking on each section', async () => {
    viewport.set(599);
    fixture.detectChanges();
    expect(component.sidenav.opened).toBe(false);
    const headerDe = fixture.debugElement.query(By.directive(HeaderComponent));
    // get burger icon
    const buttonDe = headerDe.query(
      By.css('mat-toolbar > div:nth-child(1) > button')
    );
    buttonDe.nativeElement.click();
    await fixture.whenStable();
    expect(component.sidenav.opened).toBe(true);
    // get sidenav links
    const sidenavDe = fixture.debugElement.query(
      By.directive(SidenavListComponent)
    );
    // get links
    const links = sidenavDe.queryAll(By.css('a'));
    // click on each link
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      links[i].nativeElement.click();
      await fixture.whenStable();
      expect(component.sidenav.opened).toBe(false);
      buttonDe.nativeElement.click();
      await fixture.whenStable();
      expect(component.sidenav.opened).toBe(true);
    }
  });
  fit('can navigate to spain-map', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    const location = TestBed.get(Location);
    fixture.ngZone.run(() => {
      router.navigate(['/spain-map']);
      // execute all pending asynchronous calls
      // 	We wait for all pending promises to be resolved.
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('/spain-map');
    });
  }));
  fit('can navigate to search', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    const location = TestBed.get(Location);
    fixture.ngZone.run(() => {
      router.navigate(['/search']);
      // execute all pending asynchronous calls
      // 	We wait for all pending promises to be resolved.
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('/search');
    });
  }));
  fit('can navigate to about', fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    const location = TestBed.get(Location);
    fixture.ngZone.run(() => {
      router.navigate(['/about']);
      tick();
      fixture.detectChanges();
      expect(location.path()).toBe('/about');
    });
  }));
});
