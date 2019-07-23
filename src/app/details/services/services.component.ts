import { Component, OnInit, Input } from '@angular/core';
import { Playa } from '../../playas.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() beach: Playa;
  constructor() { }

  ngOnInit() {
  }

}
