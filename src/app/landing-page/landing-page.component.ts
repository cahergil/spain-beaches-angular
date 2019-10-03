import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MapComponent } from './map/map.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MapComponent) mapComponent: MapComponent;
  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((navEnd: NavigationEnd) => {
        if (navEnd.urlAfterRedirects === '/spain-map') {
          this.mapComponent.resetMap();
        }
      });
  }
}
