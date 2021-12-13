import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/weather';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  urlApi: string ="https://api.openweathermap.org/data/2.5/weather"

  getWeather(city: string): Observable<Weather>{
    const params = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set('appid', '0e5100f5c07af6987cd2fb4276c8bdb0');

    return this.http.get<Weather>(this.urlApi , {params});
  }


  
}