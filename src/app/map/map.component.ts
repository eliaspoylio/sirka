import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation()
  }
  private getUserLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}