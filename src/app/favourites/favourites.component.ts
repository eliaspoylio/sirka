import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../_services/place.service'
import { EventService } from '../_services/event.service'
import { ActivityService } from '../_services/activity.service'
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites = [];
  favouriteSubscription: Subscription;


  constructor(
    private httpClient: HttpClient,
    private placeService: PlaceService,
    private eventService: EventService,
    private activityService: ActivityService,
  ) { }

  ngOnInit(): void {

    this.fetchDataAsPromise()
      .then((data) => {

        Object.values(data).forEach(element => {
          if (element.category == "places") {
            this.favouriteSubscription = this.placeService.getOnePlace(element.favId).subscribe((data) => {
              this.favourites.push(data)
            }, error => {
              console.log(error);
            });
          }
          else if (element.category == "events") {
            this.favouriteSubscription = this.eventService.getOneEvent(element.favId).subscribe((data) => {
              this.favourites.push(data)
            }, error => {
              console.log(error);
            });
          }
          else if (element.category == "activities") {
            this.favouriteSubscription = this.activityService.getOneActivity(element.favId).subscribe((data) => {
              this.favourites.push(data)
            }, error => {
              console.log(error);
            });
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
