import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-title-details',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
