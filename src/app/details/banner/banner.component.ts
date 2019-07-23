import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() name: string;
  @Input() isBlueFlag: boolean;
  constructor() { }

  ngOnInit() {
  }

  setRootClass()  {
    const classes = {
      rootBlueFlag: this.isBlueFlag,
      rootNoBlueFlag: !this.isBlueFlag
    };
    return classes;
  }

  setNameClass() {
    const classes = {
      beachNameBlueFlag: this.isBlueFlag,
      beachNameNoBlueFlag: !this.isBlueFlag
    };
    return classes;
  }
}
