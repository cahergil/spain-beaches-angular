import { Store } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { MapResultsComponent } from './map-results.component';
import { Playa } from 'src/app/playas.model';

class ActivatedRouteStub {
  private subject = new Subject();
  push(value) {
    this.subject.next(value);
  }
  get params() {
    return this.subject.asObservable();
  }
}

fdescribe('MapResultsComponent', () => {
  let component: MapResultsComponent;
  let fixture: ComponentFixture<MapResultsComponent>;
  let list: Playa[];
  let regionList: Playa[];
  let santanderBeaches: Playa[];
  let StoreMock: {
    select(...params: string[]): Observable<object> | Observable<Playa[]>;
  };
  beforeAll(async () => {
    try {
      const response = await fetch('../../../assets/playas.json');
      list = await response.json();
      regionList = list.filter((beach: Playa) => {
        return beach.comunidad_autonoma === 'Cantabria';
      });
      santanderBeaches = regionList.filter((beach: Playa) => {
        const regex = new RegExp('' + 'Santander' + '', 'i');
        return beach.termino_municipal.match(regex);
      });
    } catch (error) {
      console.log(error);
    }
    StoreMock = {
      select: (...params: string[]) => {
        if (params.includes('mapResultsFilter') && params.length === 1) {
          return of({ select: 'termino_municipal', input: 'santander' });
        } else if (
          params.includes('beachesList') &&
          params.includes('beaches') &&
          params.length === 2
        ) {
          return of(list);
        }
      }
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapResultsComponent],
      // imports: [StoreModule.forRoot(reducers)],
      providers: [
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
        { provide: Store, useValue: StoreMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapResultsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ region: 'Cantabria' });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should on input filter the exact number of beaches', async () => {
    // so that it goes to else in condition tap in component
    component.prevRegion = 'Cantabria';
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ region: 'Cantabria' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.region).toBe('Cantabria');
    expect(component.select).toBe('termino_municipal');
    expect(component.input).toBe('santander');
    expect(component.filteredRegionList.length).toBe(santanderBeaches.length);
  });
});
