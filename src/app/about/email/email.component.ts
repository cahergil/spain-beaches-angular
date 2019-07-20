import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { slideHeadingTrigger } from 'src/app/animations/animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [
    slideHeadingTrigger({
      translateTitle: 'translateX(-200%)',
      translateUnderline: 'translateX(-200%)'
    })
  ]
})
export class EmailComponent implements OnInit {
  public slideHeadingState = 'out-viewport';
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }
  onAppearHeading() {
    this.slideHeadingState = 'in-viewport';
    this.ref.detectChanges();
  }
}
