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
  public reactIcon = './assets/images/react.png';
  public reactRouterIcon = './assets/images/reactRouter.png';
  public reduxIcon = './assets/images/redux.png';
  public materialUIIcon = './assets/images/materialUi.png';
  public sassIcon = './assets/images/sass.png';
  public githubIcon = './assets/images/github.png';
  public stackList = [
    {
      tech: 'React 16.8.6',
      url: 'https://reactjs.org/',
      icon: this.reactIcon
    },
    {
      tech: 'React router 5.0.0',
      url: 'https://reacttraining.com/react-router/web/guides/quick-start',
      icon: this.reactRouterIcon
    },
    {
      tech: 'Redux 4.0.1',
      url: 'https://redux.js.org/',
      icon: this.reduxIcon
    },
    {
      tech: 'Material-UI 4.2.0',
      url: 'https://material-ui.com/',
      icon: this.materialUIIcon
    },
    {
      tech: 'Sass',
      url: 'https://sass-lang.com/',
      icon: this.sassIcon
    },
    {
      tech: 'React-image-gallery 0.8.17',
      url: 'https://github.com/xiaolin/react-image-gallery',
      icon: this.githubIcon
    },
    {
      tech: 'React reveal 1.2.2',
      url: 'https://github.com/rnosov/react-reveal',
      icon: this.githubIcon
    },
    {
      tech: 'React-image-fallback 8.0.0',
      url: 'https://github.com/socialtables/react-image-fallback',
      icon: this.githubIcon
    },
    {
      tech: 'Amcharts3-react 3.1.0',
      url: 'https://github.com/amcharts/amcharts3-react',
      icon: this.githubIcon
    },
    {
      tech: 'React-google-maps 9.4.5',
      url: 'https://github.com/tomchentw/react-google-maps',
      icon: this.githubIcon
    },
    {
      tech: 'React-textfit 1.1.0',
      url: 'https://github.com/malte-wessel/react-textfit',
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
