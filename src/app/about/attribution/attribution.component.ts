import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { slideHeadingTrigger } from 'src/app/animations/animations';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrls: ['./attribution.component.scss'],
  animations: [
    slideHeadingTrigger({
      translateTitle: 'translateX(-200%)',
      translateUnderline: 'translateX(-200%)'
    })
  ]
})
export class AttributionComponent implements OnInit {
  public slideHeadingState = 'out-viewport';
  public iconsIcon = './assets/images/flatIcon.jpg';
  public imagesIcon = './assets/images/pngTree.jpg';
  public icons = [
    {
      icon: 'Toilet',
      url: 'https://www.flaticon.com/free-icon/toilet_93156'
    },
    {
      icon: 'Footbath',
      url: 'https://www.flaticon.com/free-icon/footprints_22746'
    },
    {
      icon: 'Shower',
      url: 'https://www.flaticon.com/free-icon/beach-shower_74610'
    },
    {
      icon: 'Bin',
      url: 'https://www.flaticon.com/free-icon/trash_98116'
    },
    {
      icon: 'Cleaning service',
      url: 'https://www.flaticon.com/free-icon/vacuum-cleaner_291367'
    },
    {
      icon: 'Tourist office',
      url: 'https://www.flaticon.com/free-icon/info-button_64494'
    },
    {
      icon: 'Telephone',
      url: 'https://www.flaticon.com/free-icon/telephone-handle-silhouette_25453'
    },
    {
      icon: 'Beach bar',
      url: 'https://www.flaticon.com/free-icon/bar_1857406'
    },
    {
      icon: 'Drink stand',
      url: 'https://www.flaticon.com/free-icon/refreshing-cold-drink_66641'
    },
    {
      icon: 'Sunbed rental',
      url: 'https://www.flaticon.com/free-icon/deck-chair-under-the-sun_67866'
    },
    {
      icon: 'Beach umbrella rental',
      url: 'https://www.flaticon.com/free-icon/umbrella_1244404'
    },
    {
      icon: 'Nautics rental',
      url: 'https://www.flaticon.com/free-icon/sailboat_785'
    },
    {
      icon: 'Nautics club',
      url: 'https://www.flaticon.com/free-icon/boat_1034882'
    },
    {
      icon: 'Diving area',
      url: 'https://www.flaticon.com/free-icon/diving_1653907'
    },
    {
      icon: 'Surfing area',
      url: 'https://www.flaticon.com/free-icon/surfing_157797'
    },
    {
      icon: 'Childrens area',
      url: 'https://www.flaticon.com/free-icon/swing_86558'
    },
    {
      icon: 'Sports zone',
      url: 'https://www.flaticon.com/free-icon/football-player-attempting-to-kick-ball_27221'
    }];
  public images = [
    {
    image: 'Background I beach details view',
    url: 'https://pngtree.com/freebackground/beautiful-beach-background_712637.html'
    },
    {
      image: 'Background II beach details view',
      url: 'https://pngtree.com/freebackground/seaside-summer-summer-solstice-solar-terms_912758.html'
    }];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onAppearHeading() {
    this.slideHeadingState = 'in-viewport';
    this.ref.detectChanges();
  }
}
