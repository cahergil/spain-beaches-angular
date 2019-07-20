import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './landing-page/map/map.component';
import { MapResultsComponent } from './landing-page/map-results/map-results.component';
import { environment } from '../environments/environment';
import { reducers } from './store/app.reducers';
import { ShortenPipe } from './landing-page/map-results/results-content/results-content-item/shorten.pipe';
import { ImageFallbackDirective } from './directives/image-preload.directive';
import { ResultsContentComponent } from './landing-page/map-results/results-content/results-content.component';
import { ResultsFilterComponent } from './landing-page/map-results/results-filter/results-filter.component';
// tslint:disable-next-line: max-line-length
import { ResultsContentItemComponent } from './landing-page/map-results/results-content/results-content-item/results-content-item.component';
import { AboutComponent } from './about/about.component';
import { AppearViewPortDirective } from './directives/appear-viewport.directive';
import { AttributionComponent } from './about/attribution/attribution.component';
import { StackComponent } from './about/stack/stack.component';
import { EmailComponent } from './about/email/email.component';
import { TitleComponent } from './about/title/title.component';
import { ListItemComponent } from './about/list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    LandingPageComponent,
    MapComponent,
    MapResultsComponent,
    ShortenPipe,
    ImageFallbackDirective,
    AppearViewPortDirective,
    ResultsContentComponent,
    ResultsFilterComponent,
    ResultsContentItemComponent,
    AboutComponent,
    AttributionComponent,
    StackComponent,
    EmailComponent,
    TitleComponent,
    ListItemComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AmChartsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 10
    }) : [],

  ],
  providers: [AmChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
