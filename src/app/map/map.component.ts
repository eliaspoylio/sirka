import { Component, OnInit } from '@angular/core';
import { IPlace } from '../_models/place';
import { IEvent } from '../_models/event';
import { IActivity } from '../_models/activity';
import { IApiData } from '../_models/apidata';
import { Subscription } from 'rxjs';
import { PlaceService } from '../_services/place.service';
import { EventService } from '../_services/event.service';
import { ActivityService } from '../_services/activity.service';
import { StripPipe } from '../_pipes/strip.pipe';
import { HttpClient } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

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
  //nearbyPlaces: any;

  constructor(private placeService: PlaceService,
    private eventService: EventService,
    private activityService: ActivityService, 
    //private httpClient: HttpClient
    ) { }

   //apiURL = "http://open-api.myhelsinki.fi/v1";

  ngOnInit() {

    this.setCurrentLocation();
    this.placeSubscription = this.placeService.getPlaces().subscribe((data) => {
      let placeData = data as IApiData;
      placeData.data.forEach(element => {
        this.places.push(element);
      });
      this.places.forEach(element => {
      });
    }, error => {
      console.log(error);
    });
    this.eventSubscription = this.eventService.getEvents().subscribe((data) => {
      let eventData = data as IApiData;

      eventData.data.forEach(element => {
        this.events.push(element);
      });
      this.events.forEach(element => {

      });
    }, error => {
      console.log(error);
    });
    this.activitySubscription = this.activityService.getActivities().subscribe((data) => {
      let activityData = data as IApiData;

      activityData.data.forEach(element => {
        this.activities.push(element);
      });
      this.activities.forEach(element => {

      });
    }, error => {
      console.log(error);
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }




//Alla oleva filtteröi karttaan vain lähellä olevat paikat:
    /*this.setCurrentLocation()
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
  }*/

  //Alla oleva liittyy lähellä olevien paikkojen hakuun:
  /*getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lat: resp.coords.latitude, lng: resp.coords.longitude });
      },
        err => {
          reject(err);
        });
    });
  }*/

}