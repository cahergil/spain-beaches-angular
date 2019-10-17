import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { Component, Directive, Input, HostListener } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { MaterialModule } from 'src/app/material.module';

// https://github.com/angular/angular/blob/master/aio/content/examples/testing/src/testing/router-link-directive-stub.ts
/* tslint:disable:directive-class-suffix */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Component({
  selector: 'app-landing-page',
  template: '<div></div>'
})
export class LandingPageComponent {}

@Component({
  selector: 'app-search',
  template: '<div></div>'
})
export class SearchComponent {}

@Component({
  selector: 'app-about',
  template: '<div></div>'
})
export class AboutComponent {}

// paths without /
const routes: Routes = [
  {
    path: 'spain-map',
    component: LandingPageComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

fdescribe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavListComponent,
        LandingPageComponent,
        SearchComponent,
        AboutComponent,
        RouterLinkDirectiveStub
      ],
      imports: [RouterTestingModule.withRoutes(routes), MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should have 3 sections visible', () => {
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
  it('should call event emiter(close) when clicking each link(sections)', () => {
    fixture.detectChanges();
    const sectionDes = fixture.debugElement.queryAll(By.css('a'));
    const spy = spyOn(component.close, 'emit');
    for (const section of sectionDes) {
      section.triggerEventHandler('click', {});
    }
    expect(spy).toHaveBeenCalledTimes(3);
  });
  it('should verify RouterLinkActive for each link(sections)', fakeAsync(() => {
    const sections = ['spain-map', 'search', 'about'];
    fixture.detectChanges();
    const router: Router = TestBed.get(Router);
    // https://stackoverflow.com/questions/45013284/how-can-i-test-routerlinkactive-in-angular
    // https://github.com/angular/angular/issues/25837
    fixture.ngZone.run(() => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < sections.length; i++) {
        router.navigate([sections[i]]);
        tick();
        const linkDe = fixture.debugElement.queryAll(By.css('.active-item'));
        const links = linkDe.map(
          element =>
            element.injector.get(
              RouterLinkDirectiveStub
            ) as RouterLinkDirectiveStub
        );
        expect(links.length).toBe(1);
        expect(links[0].linkParams).toBe(
          `/${sections[i]}`,
          `active link should be for ${sections[i]}`
        );
      }
    });
  }));
});
