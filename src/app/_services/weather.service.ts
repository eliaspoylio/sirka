import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV } from 'env-var';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey = ENV.WEATHER_API_KEY;
  URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=60.1695&lon=24.9355&exclude=minutely,daily,alerts&appid=';

  constructor(private http: HttpClient) { }

  getWeather() : Observable<any> {
    return this.http.get(this.URL + this.APIkey);
  }
}
