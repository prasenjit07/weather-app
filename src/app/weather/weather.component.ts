import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  place: string = '';
  weather: any;
  errorMessage: string | undefined;

  constructor( private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    
  }

  //When user searches
  onSubmit(f: NgForm) {
    this.place = f.value.first;
    this.weatherService.getCurrentWeather(this.place).subscribe({
      next: weather => {
        this.weather = weather;
      },
      error: err => this.errorMessage = err
    })
  }

}
