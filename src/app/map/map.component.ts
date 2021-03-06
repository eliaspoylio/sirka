import { Component, OnInit } from '@angular/core';
import { IPlace } from '../_models/place';
import { IEvent } from '../_models/event';
import { IActivity } from '../_models/activity';
import { IApiData } from '../_models/apidata';
import { Subscription } from 'rxjs';
import { StripPipe } from '../_pipes/strip.pipe';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  placeSubscription: Subscription;
  places: IPlace[] = [];
  eventSubscription: Subscription;
  events: IEvent[] = [];
  activitySubscription: Subscription
  activities: IActivity[] = [];
  lat: number;
  lng: number;
  zoom: number;

  constructor(private httpClient: HttpClient,
    public router: Router) {
      this.router = router;
     }

  public customStyle = [
    {
      "featureType":"poi",
      "elemenType": "all",
      "stylers":[{
        visibility: "off",
      }]
    }
  ]

  apiURL = "https://open-api.myhelsinki.fi/v1";

  ngOnInit() {

    this.setCurrentLocation()

    //Alla oleva hakee lähimmät paikat:
    this.getLocation()
      .then((loc: any) => {
        this.httpClient
          .get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/places/?distance_filter=' + loc.lat + '%2C' + loc.lng + '%2C4')
          .toPromise()
          .then(res => {
            let placeData = res as IApiData;
            placeData.data.forEach(element => {
              this.places.push(element);
            });
            this.places.forEach(elemens => {
            });
          })

          this.httpClient
          .get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/events/?distance_filter=' + loc.lat + '%2C' + loc.lng + '%2C4')
          .toPromise()
          .then(res => {
            let eventData = res as IApiData;
            eventData.data.forEach(element => {
              this.events.push(element);
            });
            this.events.forEach(elemens => {
            });
          })
          this.httpClient
          .get('https://sirka-proxy.herokuapp.com/' + this.apiURL + '/activities/?distance_filter=' + loc.lat + '%2C' + loc.lng + '%2C4')
          .toPromise()
          .then(res => {
            let activityData = res as IApiData;
            activityData.data.forEach(element => {
              this.activities.push(element);
            });
            this.activities.forEach(elemens => {
            });
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

