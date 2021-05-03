import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../_models/place';
import { IApiData } from '../_models/apidata';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  placeSubscription: Subscription;
  places: IPlace[] = [];
  lat: number;
  lng: number;
  zoom: number;
  nearbyPlaces: any;

  constructor(private httpClient: HttpClient) { }

  apiURL = "http://open-api.myhelsinki.fi/v1";

  ngOnInit() {

    this.setCurrentLocation()
    this.getLocation()
      .then((loc: any) => {
        this.httpClient
          .get('http://sirka-proxy.herokuapp.com/' + this.apiURL + '/places/?distance_filter=' + loc.lat + '%2C%20%20' + loc.lng + '%2C%201')
          .toPromise()
          .then(res => {
            let placeData = res as IApiData;
            placeData.data.forEach(element => {
              this.places.push(element);
            });
            this.places.forEach(elemens => {
            });
            console.log(placeData)
          })
      })
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lat: resp.coords.latitude, lng: resp.coords.longitude });
      },
        err => {
          reject(err);
        });
    });
  }


}