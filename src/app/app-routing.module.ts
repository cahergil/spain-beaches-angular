import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: LandingPageComponent},
  { path: 'login', component: LandingPageComponent },
  { path: 'training', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
