import { Component, OnInit, Input } from '@angular/core';

import * as utilities from '../../../utils/utils';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  public utils;
  @Input() generalInfo: utilities.GeneralInfo;
  constructor() {
    this.utils = utilities;
   }

  ngOnInit() {
  }

}
