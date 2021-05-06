import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../../../_models/activity';
import { IApiData } from '../../../../_models/apidata';
import { ActivityService } from '../../../../_services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.subscribeToActivity(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  subscribeToActivity(id): void {
    this.activityService.getOneActivity(id).subscribe(
      data => {
        this.currentActivity = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }

}
