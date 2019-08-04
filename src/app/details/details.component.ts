import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, first, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';


import {AppState} from '../store/app.reducers';
import { Playa } from '../playas.model';
import { getDistance, parseCoordinate } from '../utils/utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy, AfterViewInit {
  public beachId: string;
  public isBlueFlag: boolean;
  public beach: Playa;
  public generalInfo = {};
  public generalInfoStrings = {
    termino_municipal: 'termino_municipal',
    provincia: 'provincia',
    comunidad_autonoma: 'comunidad_autonoma',
    longitud: 'longitud',
    anchura: 'anchura',
    grado_ocupacion: 'grado_ocupacion',
    paseo_maritimo: 'paseo_maritimo',
    descripcion: 'descripcion',
    images: 'images',
    nombre_alternativo: 'nombre_alternativo',
    nombre_alternativo_2: 'nombre_alternativo_2'
  };
  public beachName: string;
  public nearbyBeaches: Playa[];
  public nearbyRadius = 15000;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {

      this.route.queryParams
      .pipe(
        filter(params => params.id)
      ).subscribe(params => {
          this.beachId = params.id;
          this.store.select('beachesList')
            .pipe(
              map(beachesList => beachesList.beaches)
            )
            .subscribe(beaches => {
              if (beaches.length > 0) {
                const foundBeach = beaches.filter(beach => beach.id === this.beachId)[0];
                const beachLatLng: { lat: number, lng: number } = {lat: undefined, lng: undefined};
                beachLatLng.lat = parseCoordinate(foundBeach.coordenada_y);
                beachLatLng.lng = parseCoordinate(foundBeach.coordenada_x);
                const nearbyBeaches = beaches.filter(beach => {
                  const lat = parseCoordinate(beach.coordenada_y);
                  const lng = parseCoordinate(beach.coordenada_x);
                  return getDistance(beachLatLng, { lat, lng }) <= this.nearbyRadius && beach.id !== this.beachId;
                });
                nearbyBeaches.unshift(foundBeach);
                this.nearbyBeaches = nearbyBeaches;
                this.beach = foundBeach;
                this.isBlueFlag = this.beach.bandera_azul === 'Sí' ? true : false;
                this.generalInfo[this.generalInfoStrings.termino_municipal] = foundBeach.termino_municipal;
                this.generalInfo[this.generalInfoStrings.provincia] = foundBeach.provincia;
                this.generalInfo[this.generalInfoStrings.comunidad_autonoma] = foundBeach.comunidad_autonoma;
                this.generalInfo[this.generalInfoStrings.longitud] = foundBeach.longitud;
                this.generalInfo[this.generalInfoStrings.anchura] = foundBeach.anchura;
                this.generalInfo[this.generalInfoStrings.grado_ocupacion] = foundBeach.grado_ocupacion;
                this.generalInfo[this.generalInfoStrings.paseo_maritimo] = foundBeach.paseo_maritimo;
                this.generalInfo[this.generalInfoStrings.descripcion] = foundBeach.descripcion;
                this.generalInfo[this.generalInfoStrings.images] = foundBeach.images;
                this.generalInfo[this.generalInfoStrings.nombre_alternativo] = foundBeach.nombre_alternativo;
                this.generalInfo[this.generalInfoStrings.nombre_alternativo_2] = foundBeach.nombre_alternativo_2;
                this.beachName = foundBeach.nombre;
              }
          });

      });
  }

  ngAfterViewInit() {
    const element = document.getElementById('banner');
    if (element) {
      element.scrollIntoView();
    }
  }
  ngOnDestroy() {
    // this.store.dispatch(new fromNavigation.SetNavigationVisible(true));
  }

}
