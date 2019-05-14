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


@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    LandingPageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AmChartsModule
  ],
  providers: [AmChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
