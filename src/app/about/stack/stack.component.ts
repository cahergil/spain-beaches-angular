import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { slideHeadingTrigger } from 'src/app/animations/animations';


@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  animations: [
    slideHeadingTrigger({
      translateTitle: 'translateX(-200%)',
      translateUnderline: 'translateX(-200%)'
    })
  ]
})
export class StackComponent implements OnInit {
  public slideHeadingState = 'out-viewport';
  public angularIcon = './assets/images/angular.png';
  public ngrxIcon = './assets/images/ngrx.png';
  public angularMaterialIcon = './assets/images/angularMaterial.png';
  public sassIcon = './assets/images/sass.png';
  public rxjsIcon = './assets/images/rxjs.jpg';
  public githubIcon = './assets/images/github.png';
  public stackList = [
    {
      tech: 'Angular 7.2.0',
      url: 'https://github.com/angular/angular',
      icon: this.angularIcon
    },
    {
      tech: 'Ngrx 7.4.0',
      url: 'https://ngrx.io/',
      icon: this.ngrxIcon
    },
    {
      tech: 'Angular material 7.3.7',
      url: 'https://material.angular.io/',
      icon: this.angularMaterialIcon
    },
    {
      tech: 'Sass',
      url: 'https://sass-lang.com/',
      icon: this.sassIcon
    },
    {
      tech: 'Rsjx 6.3.3',
      url: 'https://github.com/ReactiveX/rxjs',
      icon: this.rxjsIcon
    },
    {
      tech: 'Font awesome 4.7.0',
      url: 'https://fontawesome.com/',
      icon: this.githubIcon
    },
    {
      tech: 'Amcharts3-angular 2.2.3',
      url: 'https://github.com/socialtables/react-image-fallback',
      icon: this.githubIcon
    },
    {
      tech: 'Angular maps 1.0.0',
      url: 'https://angular-maps.com/',
      icon: this.githubIcon
    },
    {
      tech: 'Ngx-gallery 5.10.0',
      url: 'https://lukasz-galka.github.io/ngx-gallery-demo/',
      icon: this.githubIcon
    }];
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {

  }
  onAppearHeading() {
    this.slideHeadingState = 'in-viewport';
    this.ref.detectChanges();
  }
}
