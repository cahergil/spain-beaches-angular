import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapResultsComponent } from './landing-page/map-results/map-results.component';
const routes: Routes = [
  { path: '', redirectTo: 'spain-map', pathMatch: 'full'},
  {
    path: 'spain-map', component: LandingPageComponent, children: [
      { path: ':region', component: MapResultsComponent}
    ]
  },
  { path: 'graphics', component: LandingPageComponent},
  { path: 'search', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
