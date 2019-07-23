import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() name: string;
  @Input() beachCoordinates: {lat: number, lng: number};
  constructor() { }

  ngOnInit() {
  }

}
