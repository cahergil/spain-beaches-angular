import { Component, OnInit, Input } from '@angular/core';

import * as utilities from '../../utils/utils';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  @Input() generalInfo: utilities.GeneralInfo;
  @Input() isBlueFlag: boolean;
  constructor() { }

  ngOnInit() {
  }

}
