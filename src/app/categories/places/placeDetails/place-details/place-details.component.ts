import { Component, OnInit } from '@angular/core';
import { IPlace } from '../../../../_models/place';
import { IApiData } from '../../../../_models/apidata';
import { PlaceService } from '../../../../_services/place.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../../../_services/favourite.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  public placeId: string;
  currentPlace = null;
  message = '';
  currentUser;

  favList = [];

  constructor(
    private placeService: PlaceService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private httpClient: HttpClient,
    private favouriteService: FavouriteService,
  ) { }

  ngOnInit(): void {
    this.subscribeToPlace(this.activatedRoute.snapshot.paramMap.get('id'));

    let fav = localStorage.getItem('FAVLIST');
    if(fav) {
      this.favList = JSON.parse(fav);
    }
  }

  subscribeToPlace(id): void {
    this.placeService.getOnePlace(id).subscribe(
      data => {
        this.currentPlace = data;
        // console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }

  updatePlace(): void {
    this.placeService.updatePlace(this.currentPlace.id, this.currentPlace)
    .subscribe(
      response => {
        console.log(response);
        this.message ='The Event was updated successfully!';
      },
      error => {
        console.log(error);
      });
      console.log('Workkii')
  }

  addFavourite(): void {
    this.favouriteService.addFav(this.currentPlace.id, "places")
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  addFav(currentPlace) {
    this.favList.push(currentPlace);
    localStorage.setItem('FAVLIST', JSON.stringify(this.favList));
  }

}
