import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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


  constructor(private router: Router, private weatherService: WeatherService) { 
    
  }

  ngOnInit(): void {
    console.log('hi');
  }

  onSubmit(f: NgForm) {
    this.place = f.value.first;
    this.weatherService.getCurrentWeather(this.place).subscribe({
      next: weather => {
        this.weather = weather;
        console.log(this.weather);
      },
      error: err => this.errorMessage = err
    })
    
  }

  
}
