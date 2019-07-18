import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Playa } from 'src/app/playas.model';

@Component({
  selector: 'app-results-content-item',
  templateUrl: './results-content-item.component.html',
  styleUrls: ['./results-content-item.component.scss']
})
export class ResultsContentItemComponent implements OnInit {
  @Input() beachItem: Playa;
  public defautImagePath = './assets/images/image_na.png';
  public banderaAzulPath = './assets/images/blue_flag_mini.png';
  public normalBeachPath = './assets/images/normal_beach.png';
  public isBlueFlag: boolean;
  public loading = true;
  public images: string[] = [];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.images = this.beachItem.images.split(',');
    this.isBlueFlag = this.beachItem.bandera_azul === 'Sí' ? true : false;

  }

  applyHeaderBackgroundColor() {
    const classes = {
      cardHeaderPrimaryBackgroundColor: this.isBlueFlag,
      cardHeaderAccentBackgroundColor: !this.isBlueFlag
    };
    return classes;

  }
  applyTitleColor() {
    const classes = {
      cardTitleBlueFlag: this.isBlueFlag,
      cardTitleNoBlueFlag: !this.isBlueFlag
    };
    return classes;
  }

  applySubtitleColor() {
    const classes = {
      cardSubTitleBlueFlagColor: this.isBlueFlag,
      cardSubTitleNoBlueFlagColor: !this.isBlueFlag
    };
    return classes;
  }

  onLoad() {
    this.loading = false;
    this.ref.detectChanges();
    // console.log('loading:' + this.beachItem.nombre + ': ' + this.loading);
  }
}
