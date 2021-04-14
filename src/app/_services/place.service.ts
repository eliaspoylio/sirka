import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://open-api.myhelsinki.fi/v1";

  public getPlaces() {
    return this.httpClient.get('http://sirka-proxy.herokuapp.com/' + this.apiURL + "/places/")
  }

}
