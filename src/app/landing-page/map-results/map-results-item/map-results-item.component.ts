import { Component, OnInit, Input } from '@angular/core';
import { Playa } from 'src/app/playas.model';
// import {image } from '../../../../assets/images/image_na.jpg'
@Component({
  selector: 'app-map-results-item',
  templateUrl: './map-results-item.component.html',
  styleUrls: ['./map-results-item.component.scss']
})
export class MapResultsItemComponent implements OnInit {
  @Input() beachItem: Playa;
  public defautImagePath = './assets/images/image_na.png';
  public banderaAzulPath = './assets/images/blue_flag_mini.png';
  public images: string[] = [];
  constructor() { }

  ngOnInit() {
    this.images = this.beachItem.images.split(',');

  }


}
