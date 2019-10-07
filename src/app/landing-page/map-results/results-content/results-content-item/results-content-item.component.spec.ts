import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ResultsContentItemComponent } from './results-content-item.component';
import { Playa } from 'src/app/playas.model';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

// class RouterStub {
//   navigate(params) {}
// }

fdescribe('ResultsContentItemComponent', () => {
  let component: ResultsContentItemComponent;
  let fixture: ComponentFixture<ResultsContentItemComponent>;
  let beach: Playa;
  // let mockRouter;
  beforeAll(async () => {
    let response;
    try {
      response = await fetch('../../../../../assets/playas.json');
      const beachesList = await response.json();
      // Antuerta en Cantabria
      const beachItem = beachesList.find((b: Playa) => b.id === '1865');
      beach = beachItem;
    } catch (error) {
      console.log(error);
    }
  });
  beforeEach(async(() => {
    // mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      declarations: [ResultsContentItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([])]
      // providers: [{ provide: Router, useClass: RouterStub }]
      // providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ResultsContentItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should render remaining photos, city and beach name', () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    fixture.detectChanges();
    const dePhotoCount = fixture.debugElement.query(
      By.css('.remainingImagesCount')
    );
    // const el: HTMLElement = dePhotoCount.nativeElement;
    expect(dePhotoCount.nativeElement.textContent).toContain(
      component.remainingPhotos.toString()
    );
    const deTerminoMunicipal = fixture.debugElement.query(
      By.css('.terminoMunicipal')
    );
    expect(deTerminoMunicipal.nativeElement.textContent).toContain(
      component.beachItem.termino_municipal
    );
    const deBeachName = fixture.debugElement.query(By.css('.beachName'));
    const regex = new RegExp(
      '' + component.beachItem.nombre.toUpperCase() + '',
      'i'
    );
    expect(deBeachName.nativeElement.textContent).toMatch(regex);
  });
  it('should render first loading, after image', async () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    const deImages = fixture.debugElement.queryAll(By.css('.image'));
    expect(deImages[0].nativeElement.getAttribute('src')).toEqual(
      './assets/images/loader.gif'
    );
    expect(deImages[1].nativeElement.getAttribute('src')).toBeNull();

    fixture.detectChanges();
    expect(deImages[1].nativeElement.getAttribute('src')).not.toBeNull();
  });
  it('should render 3 features', () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    fixture.detectChanges();
    const deFeatures = fixture.debugElement.queryAll(By.css('li'));
    expect(deFeatures.length).toBe(3);
  });
  it('should navigate to details when clicking on beach name', () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    fixture.detectChanges();
    const router = TestBed.get(Router);
    // spy on a component method. Not working alongside router navigate
    // spyOn(component, 'onDetailsClick');
    // expect(component.onDetailsClick).toHaveBeenCalled();
    const spy = spyOn(router, 'navigate');
    const deBeachName = fixture.debugElement.query(By.css('.beachName'));
    // alternative way deBeachName.nativeElement.click();
    deBeachName.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith(['/details'], {
      queryParams: { id: component.beachItem.id }
    });
  });
  fit('should navigate to details when clicking on beach image', () => {
    component.beachItem = beach;
    component.remainingPhotos = 2;
    fixture.detectChanges();
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const deImageWrapper = fixture.debugElement.query(By.css('.imageWrapper'));
    deImageWrapper.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith(['/details'], {
      queryParams: { id: component.beachItem.id }
    });
  });
});
