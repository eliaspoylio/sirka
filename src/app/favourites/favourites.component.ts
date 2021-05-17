import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../_services/place.service'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../_services/favourite.service';
import { IPlace } from '../_models/place';
import { IApiData } from '../_models/apidata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites = [];

  constructor(
    private favouriteService: FavouriteService,
  ) { }

  ngOnInit(): void {
    this.favouriteService.getFavourites()
    .subscribe(
      response => {
        this.favourites = response
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
