import { Directive, Input, ElementRef, OnDestroy, OnInit } from '@angular/core';


@Directive({
  selector: '[appFallbackSrc]'
 })
export class ImageFallbackDirective implements  OnDestroy{
  @Input('appFallbackSrc') imgSrc: string;
  private el: HTMLElement;
  private isApplied = false;
  private EVENT_ERROR = 'error';
  private imageLoader = './assets/images/loader.gif';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.addEventListener(this.EVENT_ERROR, this.onError.bind(this));
  }

  private onError() {
    this.removeEvents(this.EVENT_ERROR);

    if (!this.isApplied) {
      this.isApplied = true;
      this.el.setAttribute('src', this.imgSrc);
    }
  }

  private removeEvents(event: string) {
    if (event === this.EVENT_ERROR) {
      this.el.removeEventListener(this.EVENT_ERROR, this.onError);
    }

  }

  ngOnDestroy() {
    this.removeEvents(this.EVENT_ERROR);
  }
}
