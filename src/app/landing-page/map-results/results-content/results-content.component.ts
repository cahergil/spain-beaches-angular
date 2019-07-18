import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

import { Playa } from 'src/app/playas.model';

@Component({
  selector: 'app-results-content',
  templateUrl: './results-content.component.html',
  styleUrls: ['./results-content.component.scss']
})
export class ResultsContentComponent implements OnInit, OnChanges {

  public filteredList: Playa[] = [];
  private offset: number;
  private step = 20;
  private reachedEnd = false;
  @Input() regionList: Playa[];
  constructor(private ref: ChangeDetectorRef, private scrollDispatcher: ScrollDispatcher) {
    // https://stackoverflow.com/questions/44516017/how-to-handle-window-scroll-event-in-angular-4/54005183#54005183
    // https://material.angular.io/cdk/scrolling/overview
    this.scrollDispatcher.scrolled().subscribe((x: CdkScrollable) => {
      const val = x.measureScrollOffset('bottom');
      if (val < 100) {
       this.onScroll();
      }
    });
  }


  ngOnInit() {

  }

  loadData() {
    // offset init should be here, for each new region click
    this.offset = 0;
    this.filteredList = this.regionList.slice(this.offset, this.step);
  }
  ngOnChanges(changes: SimpleChanges) {
    const key = 'regionList';
    if (changes[key].currentValue.length > 0) {
      this.loadData();
    }
  }

  onScroll(): void {
    if (this.reachedEnd) {
      return;
    }
    if (this.offset + this.step <= this.regionList.length) {
      this.offset += this.step;
    } else {
      this.offset += (this.regionList.length - this.offset);
      this.reachedEnd = true;
    }
    this.filteredList = [...this.regionList.slice(0, this.offset)];
    this.ref.detectChanges();
    console.log('offset', this.offset);
  }

}
