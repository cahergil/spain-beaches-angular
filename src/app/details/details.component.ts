import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, first, mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromNavigation from '../navigation/header/store/header.actions';
import {AppState} from '../store/app.reducers';
import { Playa } from '../playas.model';
import { GeneralInfoComponent } from './presentation/general-info/general-info.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
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
  public beachCoordinates: { lat: number, lng: number } = {
    lat: 0,
    lng: 0
  };
  public beachName: string;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
      this.route.queryParams
      .pipe(
        filter(params => params.id)
      )
      .subscribe(params => {
        this.beachId = params.id;
        this.store.select('beachesList')
          .pipe(
            map(beachesList => beachesList.beaches),
            map((beaches: Playa[]) => beaches.filter(beach => beach.id === this.beachId)[0])
             // this also would be ok
             // flatMap aka mergeMap, flattens the array
             // mergeMap(beachesList => beachesList.beaches),
             // filter(beach => beach.id === this.beachId)
           )
          .subscribe(beach => {
            if (beach !== undefined) {
              this.beach = beach;
              this.isBlueFlag = this.beach.bandera_azul === 'Sí' ? true : false;
              this.generalInfo[this.generalInfoStrings.termino_municipal] = beach.termino_municipal;
              this.generalInfo[this.generalInfoStrings.provincia] = beach.provincia;
              this.generalInfo[this.generalInfoStrings.comunidad_autonoma] = beach.comunidad_autonoma;
              this.generalInfo[this.generalInfoStrings.longitud] = beach.longitud;
              this.generalInfo[this.generalInfoStrings.anchura] = beach.anchura;
              this.generalInfo[this.generalInfoStrings.grado_ocupacion] = beach.grado_ocupacion;
              this.generalInfo[this.generalInfoStrings.paseo_maritimo] = beach.paseo_maritimo;
              this.generalInfo[this.generalInfoStrings.descripcion] = beach.descripcion;
              this.generalInfo[this.generalInfoStrings.images] = beach.images;
              this.generalInfo[this.generalInfoStrings.nombre_alternativo] = beach.nombre_alternativo;
              this.generalInfo[this.generalInfoStrings.nombre_alternativo_2] = beach.nombre_alternativo_2;
              this.beachCoordinates.lat = parseFloat(this.beach.coordenada_y.replace(',', '.'));
              this.beachCoordinates.lng = parseFloat(this.beach.coordenada_x.replace(',', '.'));
              this.beachName = beach.nombre;

            }
          });

      });
  }

  ngOnDestroy() {
    // this.store.dispatch(new fromNavigation.SetNavigationVisible(true));
  }

}
