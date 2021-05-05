import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../_models/event';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://open-api.myhelsinki.fi/v1";
  // limit = '?limit=';

  public getEvents() {
    return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/events/");
  }

  public getOneEvent(id): Observable<any> {
    return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/event/' + id);
  }

  // public updateEvent(id, data): Observable<any> {
  //   return this.httpClient.put('https://sirka-proxy.herokuapp.com/' + this.apiURL + id, data);
  // }

    // public createEvent(data): Observable<any> {
  //   return this.httpClient.post(this.apiURL, data);
  // }

  // public deleteEvent(id): Observable<any> {
  //   return this.httpClient.delete('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/event/' + id);
  // }

  // public deleteAllEvents(): Observable<any> {
  //   return this.httpClient.delete('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/events/");
  // }

  // public limitByNumber(number): Observable<any> {
  //   return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/events/" + this.limit + number);
  // }


}
