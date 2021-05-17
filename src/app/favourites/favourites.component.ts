import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../_services/place.service'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../_services/favourite.service';
import { IPlace } from '../_models/place';
import { IApiData } from '../_models/apidata';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Favourite } from '../_models/favourite';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites = [];

  constructor(
    private favouriteService: FavouriteService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    console.log("Angular 10 Promises");
    this.fetchDataAsPromise()
      .then((data) => {
        
        console.log(JSON.stringify(data));
        console.log(Object.values(data))
        Object.values(data).forEach(element => {
          this.favourites.push(element);
        });
        console.log(this.favourites)
        
        Object.values(data).forEach(element => {
          if (element.category == "places") {
            console.log(element.category)
          }
          else if (element.category == "events") {
            console.log(element.category)
          }
          else if (element.category == "activities") {
            console.log(element.category)
          }
          

        });
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error));
      });


  }

  fetchDataAsPromise() {
    return this.httpClient
      .get(
        `${environment.apiUrl}/fav/favourites`
      )
      .toPromise();
  }

}
