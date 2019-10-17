// for viewport to be recognized by karma
/// <reference types="karma-viewport" />
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, NavigationEnd, Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material.module';

class MockRouter {
  public events = of(new NavigationEnd(0, '/details', '/details'));
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MaterialModule,
        // to recognize flex-layout attributes
        FlexLayoutModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [{ provide: Router, useClass: MockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should have a link to each section of the page', () => {
    fixture.detectChanges();
    const sections = ['/spain-map', '/search', '/about'];
    const sectionDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    const href = 'href';
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < sections.length; i++) {
      const index = sectionDes.findIndex(
        de => de.properties[href] === sections[i]
      );
      expect(index).toBeGreaterThan(-1);
    }
  });
  it('shoud have sections hidden when viewport < 600px', () => {
    viewport.set(599);
    fixture.detectChanges();
    const toolbarDivWrapper = fixture.debugElement.query(
      By.css('mat-toolbar > div:nth-child(2)')
    ).nativeElement;
    // compute styles
    const styles = window.getComputedStyle(toolbarDivWrapper);
    // div container of anchor elements is hidden
    expect(styles.display).toBe('none');
    // none of them work
    // console.log(toolbarDivWrapper.getAttribute('style'));
    // console.log(toolbarDivWrapper.style);
    // console.log(toolbarDivWrapper);
    // work
    // console.log(styles.getPropertyValue('display'));
    // console.log(styles.getPropertyValue('flex'));
    viewport.reset();
  });
  it('shoud have hamburger menu visible when viewport < 600px', () => {
    viewport.set(599);
    fixture.detectChanges();
    const iconWrapper = fixture.debugElement.query(
      By.css('mat-toolbar > div:nth-child(1)')
    ).nativeElement;
    // compute styles
    const styles = window.getComputedStyle(iconWrapper);
    // div container of icon not hidden
    expect(styles.display).not.toBe('none');
    viewport.reset();
  });
  it('shoud have sections visible when viewport >= 600px', () => {
    fixture.detectChanges();
    const toolbarDivWrapper = fixture.debugElement.query(
      By.css('mat-toolbar > div:nth-child(2)')
    ).nativeElement;
    // compute styles
    const styles = window.getComputedStyle(toolbarDivWrapper);
    // container(div) of sections not hidden
    expect(styles.display).not.toBe('none');
  });
  it('shoud have hamburger icon hidden when viewport >= 600px', () => {
    fixture.detectChanges();
    const iconWrapper = fixture.debugElement.query(
      By.css('mat-toolbar > div:nth-child(1)')
    ).nativeElement;
    // compute styles
    const styles = window.getComputedStyle(iconWrapper);
    // container(div) of sections not hidden
    expect(styles.display).toBe('none');
  });
  it('shoud call onToggleSidenav when hamburger icon is clicked', () => {
    fixture.detectChanges();
    const spy = spyOn(component.sidenavToggle, 'emit');
    const button = fixture.debugElement.query(By.css('mat-toolbar button'));
    button.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith();
    // alternative way
    // expect(component.sidenavToggle.emit).toHaveBeenCalled();
    // expect(component.sidenavToggle.emit).toHaveBeenCalledWith();
  });
  it('shoud test isDetails equals true when visiting details page', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.isDetails).toEqual(true);
  });
});
