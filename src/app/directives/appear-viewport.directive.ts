import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Directive({
    selector: '[appear]'
})
export class AppearViewPortDirective implements AfterViewInit {
  fired = false;
  @Output() appear: EventEmitter<void> = new EventEmitter<any>();

  constructor(public el: ElementRef, private scrollDispatcher: ScrollDispatcher) {

    this.scrollDispatcher.scrolled().subscribe((x: CdkScrollable) => {
      if ( !this.fired && this.isAnyPartOfElementInViewport(this.el)  ) {
        this.fired = true;
        this.appear.emit();
      }
    });
  }
  ngAfterViewInit() {
    if (!this.fired && this.isAnyPartOfElementInViewport(this.el)) {
      this.fired = true;
      this.appear.emit();
    }
  }
  isAnyPartOfElementInViewport(el: ElementRef ) {

    const rect = el.nativeElement.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    console.log('inviewport?', vertInView && horInView);
    return (vertInView && horInView);
  }

}
