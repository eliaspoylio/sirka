import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { IPlace } from '../_models/place';
import { IApiData } from '../_models/apidata';
import { PlaceService } from '../_services/place.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  placeSubscription: Subscription;
  places: IPlace[] = [];
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
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
  }

};
