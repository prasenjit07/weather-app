import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { WeathercomparisonComponent } from './weather/weathercomparison.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeathercomparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {path:"/",component:AppComponent},
    //   {path:"/weathercomponent",component:WeatherComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
