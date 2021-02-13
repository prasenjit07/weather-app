import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  place:string ='';
  public WeatherData: any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(f:NgForm){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+f.value.first+'&appid=08cc33040d275c10d098f0e906ced2ef')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    this.place=f.value;
    console.log(this.place)
    console.log(f.value.first)
  }

  colour:string='';
  cur_temp:number =25;
  feel_temp:number=25;
  setWeatherData(data: any){
    this.WeatherData=data;
    if(this.WeatherData){
      if(this.WeatherData.list[0].main.temp<293.15)
        this.colour='grey';
      else if(this.WeatherData.list[0].main.temp>303.15)
        this.colour='red';
      else
        this.colour='green';

      this.cur_temp=Math.trunc(this.WeatherData.list[0].main.temp-273);
      this.feel_temp=Math.trunc(this.WeatherData.list[0].main.feels_like - 273 );
    }
  }

  
  



}
