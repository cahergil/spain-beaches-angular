import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { ResultsFilterComponent } from './results-filter.component';
import { MaterialModule } from 'src/app/material.module';
import { reducers } from '../../../store/app.reducers';
import { Playa } from 'src/app/playas.model';

fdescribe('ResultsFilterComponent', () => {
  let component: ResultsFilterComponent;
  let fixture: ComponentFixture<ResultsFilterComponent>;
  let count: number;
  const region = 'Cantabria';
  beforeAll(async () => {
    const response = await fetch('../../../../assets/playas.json');
    const beachList: Playa[] = await response.json();
    const regionList = beachList.filter(
      (b: Playa) => b.comunidad_autonoma === 'Cantabria'
    );
    count = regionList.length;
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsFilterComponent],
      imports: [
        MaterialModule,
        // formControl directive in template, import both: reactive and td
        FormsModule,
        ReactiveFormsModule,
        // required
        // BrowserAnimationsModule,
        NoopAnimationsModule,
        // StoreModule.forRoot({ mapResultsFilter: resultsFilterReducer })
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should have count and region text', () => {
    component.count = count;
    component.region = region;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('.results__header-number'))
        .nativeElement.textContent
    ).toBe(count.toString());
    expect(
      fixture.debugElement.query(By.css('.results__header-region'))
        .nativeElement.textContent
    ).toContain(region);
  });
  it('should have two options', async () => {
    component.input = '';
    component.select = 'termino_municipal';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('mat-select'))
      .nativeElement;
    select.click();
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('mat-option'));
    expect(options[0].nativeElement.textContent).toContain('Locality');
    expect(options[1].nativeElement.textContent).toContain('Beach name');
  });
  it('should be able to change option', async () => {
    component.input = '';
    component.select = 'termino_municipal';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('mat-select'))
      .nativeElement;
    select.click();
    fixture.detectChanges();
    const option = fixture.debugElement.queryAll(By.css('mat-option'))[1]
      .nativeElement;
    option.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(select.textContent).toContain('Beach name');
    });
  });
  it('should set input to empty on change option', async () => {
    component.input = '';
    component.select = 'termino_municipal';
    fixture.detectChanges();
    const select = fixture.debugElement.query(By.css('mat-select'))
      .nativeElement;
    select.click();
    fixture.detectChanges();
    const option = fixture.debugElement.queryAll(By.css('mat-option'))[1]
      .nativeElement;
    option.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(input.value).toBe('');
    });
  });
  // https://github.com/angular/components/blob/master/src/material/input/input.spec.ts#L129
  it('should input not be empty after setting a value', () => {
    component.input = '';
    component.select = 'termino_municipal';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'newValue';
    // simulate input event
    input.triggerEventHandler('input', { target: input });
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#mat-form-field-label-3'))
      .nativeElement;
    expect(el.classList.contains('mat-form-field-empty')).toBe(false);
  });

  fit('should call store dispatch after having set input value ', fakeAsync(() => {
    const debounceTime = 500;
    component.input = '';
    component.select = 'termino_municipal';
    fixture.detectChanges();
    const store = TestBed.get(Store);
    const spy = spyOn(store, 'dispatch');
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'newValue';
    // simulate input event
    input.triggerEventHandler('input', { target: input });
    fixture.detectChanges();
    tick(debounceTime);
    expect(spy).toHaveBeenCalledTimes(1);
  }));
});
