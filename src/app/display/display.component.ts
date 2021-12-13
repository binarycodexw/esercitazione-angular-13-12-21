import { Component, OnInit } from '@angular/core';
import { Weather } from '../interfaces/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  cityInseriment!:string;
  weather: Weather | undefined;
  today: Date = new Date();


  constructor(private weatherService: WeatherService) { }

  public getData(){
    this.weatherService.getWeather(this.cityInseriment).subscribe(
      (response: any) =>{
        this.weather = response
      }
    )
  }

  ngOnInit(): void {
  }

}
