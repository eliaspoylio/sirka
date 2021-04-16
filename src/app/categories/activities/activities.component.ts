import { Component, OnInit } from '@angular/core';
import { IApiData } from '../../_models/apidata';
import { IActivity } from '../../_models/activity';
import { ActivityService } from '../../_services/activity.service';
import { element } from 'protractor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activitySubscription: Subscription
  activities: IActivity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
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

};
