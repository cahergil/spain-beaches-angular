import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  @Input() images: string;
  public galleryOptions: NgxGalleryOptions[] = [];
  public galleryImages: NgxGalleryImage[] = [];

  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {

    const imagesString = 'images';
    if (changes[imagesString].currentValue !== undefined) {
      this.galleryOptions = [
        {
          width: '100%',
          height: '50rem',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '40rem',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
      let images = changes[imagesString].currentValue.split(',');
      // to skip first image
      images = images.slice(1);
      images.forEach((image: string) => {
        this.galleryImages.push(
          {
            small: image,
            medium: image,
            big: image
          });
      });


    }
  }

}
