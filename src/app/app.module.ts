import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { MapComponent } from './landing-page/map/map.component';
import { MapResultsComponent } from './landing-page/map-results/map-results.component';

import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { MapResultsItemComponent } from './landing-page/map-results/map-results-item/map-results-item.component';
import { ShortenPipe } from './landing-page/map-results/map-results-item/shorten.pipe';
import { ImageFallbackDirective} from './directives/image-preload.directive'



@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    LandingPageComponent,
    MapComponent,
    MapResultsComponent,
    MapResultsItemComponent,
    ShortenPipe,
    ImageFallbackDirective

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
