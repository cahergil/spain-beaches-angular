import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-title',
  templateUrl: './details-title.component.html',
  styleUrls: ['./details-title.component.scss']
})
export class DetailsTitleComponent implements OnInit {
  @Input() name: string;
  @Input() isBlueFlag: boolean;

  constructor() { }

  ngOnInit() {
  }

  selectTitleClass() {
    const classes = {
      rootNoBlueFlag: !this.isBlueFlag,
      rootBlueFlag: this.isBlueFlag
    };
    return classes;

  }
}
