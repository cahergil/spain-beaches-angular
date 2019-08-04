import { Component, OnInit, Input, ChangeDetectorRef, NgZone } from '@angular/core';
import { Playa } from 'src/app/playas.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-results-content-item',
  templateUrl: './results-content-item.component.html',
  styleUrls: ['./results-content-item.component.scss']
})
export class ResultsContentItemComponent implements OnInit {
  @Input() beachItem: Playa;
  @Input() remainingPhotos: number;
  public defautImagePath = './assets/images/image_na.png';
  public isBlueFlag: boolean;
  public loading = true;
  public images: string[] = [];
  public featureList: string[] = [];
  public remainingImages: string;
  constructor(private ref: ChangeDetectorRef, private router: Router, private ngZone: NgZone) { }

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

    if (this.remainingPhotos <= 0) {
      this.remainingImages = '';
    } else {
      this.remainingImages = '+' + this.remainingPhotos;
    }

    this.featureList = this.featureList.filter(feature => feature !== null);

  }


  onLoad() {
    this.loading = false;
    this.ref.detectChanges();
  }

  onDetailsClick() {
    this.ngZone.run(() => {
      this.router.navigate(['/details'], { queryParams: { id: this.beachItem.id } });
    });
  }
}
