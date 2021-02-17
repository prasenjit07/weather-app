import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeathercomparisonComponent } from './weather/weathercomparison.component';

const routes: Routes = [
  { path: "home", component: WeatherComponent },
  { path: "home/:place", component: WeathercomparisonComponent },
  { path: "", pathMatch: "full", redirectTo: "home"},
  { path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
