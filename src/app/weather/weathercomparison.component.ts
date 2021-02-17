import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weathercomparison',
  templateUrl: './weathercomparison.component.html',
  styleUrls: ['./weathercomparison.component.css']
})
export class WeathercomparisonComponent implements OnInit {
  weather: any;

  constructor(private route:ActivatedRoute,private weatherService: WeatherService) { }
  errorMessage: string | undefined;
  
  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('place');
    console.log("PARAM", param);
    if (param) {
      const place = param;
      this.getWeathers(place);
    }
  }

  getWeathers(place: string): void {
    this.weatherService.getForecastWeather(place).subscribe({
      next: weather => {
        this.weather = weather;
        //console.log(this.weatherForecastData);
      },
      error: err => this.errorMessage = err
    })
  }
  
}
