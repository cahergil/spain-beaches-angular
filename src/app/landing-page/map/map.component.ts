import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: AmChart;
  private areaColor = '#BDBDBD';

  constructor(private AmCharts: AmChartsService) { }


  ngOnInit() {
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
        autoZoom: false,
        selectedColor: '#CC0000',
        selectable: true,
        // rollOverColor: "#009ce0"
      },
    });
    this.chart.addListener('clickMapObject', this.handleClick);


  }

  handleClick = (e) => {
    console.log('click:', e.mapObject.id);
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }

  }
}
