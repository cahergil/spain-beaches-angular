import { Component, OnInit, Input } from '@angular/core';
import { Playa } from 'src/app/playas.model';

@Component({
  selector: 'app-map-results-item',
  templateUrl: './map-results-item.component.html',
  styleUrls: ['./map-results-item.component.scss']
})
export class MapResultsItemComponent implements OnInit {
  @Input() beachItem: Playa;
  public images: string[] = [];
  constructor() { }

  ngOnInit() {
    this.images = this.beachItem.images.split(',');
  }

}
