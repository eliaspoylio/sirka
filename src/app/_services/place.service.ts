import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://open-api.myhelsinki.fi/v1";

  public getPlaces() {
    return this.httpClient.get('http://sirka-proxy.herokuapp.com/' + this.apiURL + "/places/")
  }

  public getOnePlace(id): Observable<any> {
    return this.httpClient.get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/place/' + id);
  }

  public updatePlace(id, data): Observable<any> {
    return this.httpClient.put('https://sirka-proxy.herokuapp.com/' + this.apiURL + id, data);
  }

}
