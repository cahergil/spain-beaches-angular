import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { regionMap } from './mapTypes';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: AmChart;
  private areaColor = '#BDBDBD';
  private mapComunidades = new Map();



  constructor(
    private AmCharts: AmChartsService,
    private router: Router,
    private route: ActivatedRoute,
    private zone: NgZone
  ) { }


  ngOnInit() {
    this.mapComunidades.set('ES-AN', regionMap.ANDALUCIA);
    this.mapComunidades.set('ES-AS', regionMap.ASTURIAS);
    this.mapComunidades.set('ES-CB', regionMap.CANTABRIA);
    this.mapComunidades.set('ES-CE', regionMap.CEUTA);
    this.mapComunidades.set('ES-CN', regionMap.CANARIAS);
    this.mapComunidades.set('ES-CT', regionMap.CATALUÑA);
    this.mapComunidades.set('ES-GA', regionMap.GALICIA);
    this.mapComunidades.set('ES-IB', regionMap.BALEARES);
    this.mapComunidades.set('ES-MC', regionMap.MURCIA);
    this.mapComunidades.set('ES-ML', regionMap.MELILLA);
    this.mapComunidades.set('ES-PV', regionMap.ESUSKADI);
    this.mapComunidades.set('ES-VC', regionMap.VALENCIA);
  }
  ngAfterViewInit(): void {
    this.chart = this.AmCharts.makeChart('mapdiv', {
      type: 'map',
      dataProvider: {
        map: 'spain2Low',
        areas: [
          { id: 'ES-AN', color: this.areaColor },
          { id: 'ES-AS', color: this.areaColor },
          { id: 'ES-CB', color: this.areaColor },
          { id: 'ES-CE', color: this.areaColor },
          { id: 'ES-CN', color: this.areaColor },
          { id: 'ES-CT', color: this.areaColor },
          { id: 'ES-GA', color: this.areaColor },
          { id: 'ES-IB', color: this.areaColor },
          { id: 'ES-MC', color: this.areaColor },
          { id: 'ES-ML', color: this.areaColor },
          { id: 'ES-PV', color: this.areaColor },
          { id: 'ES-VC', color: this.areaColor },

        ]
      },
      areasSettings: {
        outlineColor: '#fff',
        outlineAlpha: 1,
        outlineThickness: 1,
        autoZoom: false,
        selectedColor: '#D4AC16',
        selectable: true,
        rollOverColor: '#D4AC16'
      },
      zoomControl: {
        homeButtonEnabled: false,
        zoomControlEnabled: false,
        panControlEnabled: false,
      },
    });
    this.chart.addListener('clickMapObject', this.handleRegionClick);


  }

  handleRegionClick = (e) => {
    console.log('click:', e.mapObject.id);
    const region = this.mapComunidades.get(e.mapObject.id);
    this.zone.run(() => {

      this.router.navigate([region], { relativeTo: this.route })
        .then(success => {
          console.log('router.navigate', success);
          const resultId = document.getElementById('results');
          console.log(resultId);
          resultId.scrollIntoView({ behavior: 'smooth' });

        });

    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }

  }
}
