import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../../../_models/activity';
import { IApiData } from '../../../../_models/apidata';
import { ActivityService } from '../../../../_services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../../../_services/favourite.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  public activityId: number;
  currentActivity= null;
  message = '';

  constructor(
    private activityService: ActivityService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private httpClient: HttpClient,
    private favouriteService: FavouriteService,
  ) { }

  ngOnInit(): void {
    this.subscribeToActivity(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  subscribeToActivity(id): void {
    this.activityService.getOneActivity(id).subscribe(
      data => {
        this.currentActivity = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  addFavourite(): void {
    this.favouriteService.addFav(this.currentActivity.id, "activities")
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
