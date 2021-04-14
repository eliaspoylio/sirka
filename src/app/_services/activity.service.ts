import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

   apiURL = "http://open-api.myhelsinki.fi/v1";

   public getActivities() {
     return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/activities/")
   };
}

