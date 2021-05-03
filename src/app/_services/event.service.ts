import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../_models/event';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://open-api.myhelsinki.fi/v1";

  public getEvents() {
    return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + "/events/")
  }

  // getParticularEvent(id: string): Observable<IEvent>{
  //     return this.httpClient.get<IEvent[]>('../_models/event').filter(h => h.id === id);
  // }
}
