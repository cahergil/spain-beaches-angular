import { Component, OnInit, AfterViewInit, NgZone, OnDestroy, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_spainProvincesLow from '@amcharts/amcharts4-geodata/spainLow';
// import am4geodata_spainProvincesLow from '../../assets/maps/spain2Low.svg';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit,OnDestroy {
  public map: am4maps.MapChart;

  @ViewChild('infobox') infobox: ElementRef;
  constructor(private zone: NgZone, private renderer: Renderer2) { }

  ngOnInit() {


  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    console.log(e.pageX + ':' + e.pageY);

    this.renderer.setStyle(this.infobox.nativeElement, 'top', e.pageY + 'px');
    this.renderer.setStyle(this.infobox.nativeElement, 'left', e.pageX + 'px');
  }

  ngAfterViewInit(): void {

    this.zone.runOutsideAngular(() => {

      // this.map = am4core.create('chartdiv', am4maps.MapChart);

      // this.map.geodata = am4geodata_spainProvincesLow;
      // let polygonSeries = new am4maps.MapPolygonSeries();
      // polygonSeries.useGeodata = true;
      // this.map.series.push(polygonSeries);
    });
  }

  ngOnDestroy() {


  }
}
