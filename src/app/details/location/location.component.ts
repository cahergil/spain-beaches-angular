import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Playa } from 'src/app/playas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements  OnChanges {
  @Input() nearbyBeaches: Playa[];
  @Input() isBlueFlag: boolean;
  public surroundingBeaches: Playa[] = [];
  public ready = false;
  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    const nearbyBeaches = 'nearbyBeaches';
    if (changes[nearbyBeaches].currentValue !== undefined) {
      this.surroundingBeaches = changes[nearbyBeaches].currentValue;
      this.ready = true;
    }
  }
  onClickInfoWindow(id: string) {
    setTimeout(() => {
      this.router.navigate(['/details'], { queryParams: { id }, replaceUrl: true });
    });
  }
  parseCoordinate(x: string) {
    return parseFloat(x.replace(',', '.'));
  }
}
