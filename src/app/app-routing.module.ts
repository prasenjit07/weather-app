import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeathercomparisonComponent } from './weather/weathercomparison.component';

const routes: Routes = [
  
    // {path:"/",component:AppComponent},
    {path:"weathercomparison",component:WeathercomparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
