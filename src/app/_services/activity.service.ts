import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

   apiURL = "https://open-api.myhelsinki.fi/v1";

   public getActivities() {
     return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/activities/")
   };

   public getOneActivity(id): Observable<any> {
    return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/activity/' + id);
  }
}

