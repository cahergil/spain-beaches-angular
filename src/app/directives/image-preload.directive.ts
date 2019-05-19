import { Directive, Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[appFallbackSrc]'
 })
export class ImageFallbackDirective {
  @Input('appFallbackSrc') imgSrc: string;
  private el: HTMLElement;
  private isApplied = false;
  private EVENT_TYPE = 'error';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.addEventListener(this.EVENT_TYPE, this.onError.bind(this));
  }

  private onError() {
    this.removeEvents();

    if (!this.isApplied) {
      this.isApplied = true;
      this.el.setAttribute('src', this.imgSrc);
    }
  }

  private removeEvents() {
    this.el.removeEventListener(this.EVENT_TYPE, this.onError);
  }

  ngOnDestroy() {
    this.removeEvents();
  }
}
