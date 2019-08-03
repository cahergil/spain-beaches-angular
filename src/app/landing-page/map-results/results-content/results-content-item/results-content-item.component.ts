import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Playa } from 'src/app/playas.model';
import { Router } from '@angular/router';

import * as fromApp from '../../../../store/app.reducers';
import * as fromNavigationActions from '../../../../navigation/header/store/header.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-results-content-item',
  templateUrl: './results-content-item.component.html',
  styleUrls: ['./results-content-item.component.scss']
})
export class ResultsContentItemComponent implements OnInit {
  @Input() beachItem: Playa;
  public defautImagePath = './assets/images/image_na.png';
  public banderaAzulPath = './assets/images/blue_flag_mini.png';
  public normalBeachPath = './assets/images/normal_beach.png';
  public isBlueFlag: boolean;
  public loading = true;
  public images: string[] = [];
  public featureList: string[] = [];
  constructor(private ref: ChangeDetectorRef, private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.images = this.beachItem.images.split(',');
    this.isBlueFlag = this.beachItem.bandera_azul === 'Sí' ? true : false;
    const length = this.beachItem.longitud.replace('metros', 'm').replace(',', '.');
    const lifeGuard = this.beachItem.auxilio_y_salvamento === 'Sí' ? 'lifeguard' : null;
    const nudism = this.beachItem.nudismo === 'Sí' ? 'nudism' : null;
    const surf = this.beachItem.zona_surf === 'Sí' ? 'surf' : null;
    const beachBar = this.beachItem.establecimiento_comida === 'Sí' ? 'beach bar' : null;
    const shower = this.beachItem.duchas === 'Sí' ? 'shower' : null;
    const blueFlag = this.beachItem.bandera_azul === 'Sí' ? 'blue flag' : null;
    const diving = this.beachItem.submarinismo === 'Sí' ? 'diving' : null;
    this.featureList.push(length, shower, beachBar, lifeGuard, nudism, surf, diving, blueFlag);

    this.featureList = this.featureList.filter(feature => feature !== null);

  }


  onLoad() {
    this.loading = false;
    this.ref.detectChanges();
  }

  onDetailsClick() {
    // this.store.dispatch(new fromNavigationActions.SetNavigationVisible(false));
    this.router.navigate(['/details'], { queryParams: { id: this.beachItem.id } });
  }
}
