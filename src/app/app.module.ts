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
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AngularFittextModule } from 'angular-fittext';

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
import { SearchComponent } from './search/search.component';
import { SearchFiltersComponent } from './search/search-filters/search-filters.component';
import { DetailsComponent } from './details/details.component';
import { PresentationComponent } from './details/presentation/presentation.component';
import { ServicesComponent } from './details/services/services.component';
import { LocationComponent } from './details/location/location.component';
import { DescriptionComponent } from './details/presentation/description/description.component';
import { GalleryComponent } from './details/presentation/gallery/gallery.component';
import { GeneralInfoComponent } from './details/presentation/general-info/general-info.component';
import { FacilitiesComponent } from './details/facilities/facilities.component';
import { BannerComponent } from './details/banner/banner.component';
import { DetailsTitleComponent } from './details/details-title/details-title.component';
import { SectionTitleComponent } from './details/facilities/section-title/section-title.component';
import { TranslateTextComponent } from './details/translate-text/translate-text.component';
import { SearchFiltersMobileComponent } from './search/search-filters-mobile/search-filters-mobile.component';
import { DrawerComponent } from './search/search-filters-mobile/drawer/drawer.component';
import { FeatureItemComponent } from './landing-page/map-results/results-content/results-content-item/feature-item/feature-item.component';

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
    ListItemComponent,
    SearchComponent,
    SearchFiltersComponent,
    DetailsComponent,
    PresentationComponent,
    ServicesComponent,
    LocationComponent,
    DescriptionComponent,
    GalleryComponent,
    GeneralInfoComponent,
    FacilitiesComponent,
    BannerComponent,
    DetailsTitleComponent,
    SectionTitleComponent,
    TranslateTextComponent,
    SearchFiltersMobileComponent,
    DrawerComponent,
    FeatureItemComponent
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
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 10
        })
      : [],
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBzE15BZUN0Xhhx0OzkMKNlaII7QX4p6GU'
    }),
    AgmSnazzyInfoWindowModule,
    AngularFittextModule
  ],
  providers: [AmChartsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
