import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../../../../_models/event';
import { IApiData } from '../../../../_models/apidata';
import { Observable, Subscription } from 'rxjs';
import { EventService } from '../../../../_services/event.service';
import { ActionSequence } from 'selenium-webdriver';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavouriteService } from '../../../../_services/favourite.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  public eventId: string;

  currentEvent =null;
  message = '';

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private httpClient: HttpClient,
    private favouriteService: FavouriteService,) { }

  ngOnInit(): void {
   this.subscribeToEvent( this.activatedRoute.snapshot.paramMap.get('id'));
  }

  subscribeToEvent(id): void {
    this.eventService.getOneEvent(id).subscribe(
        data => {
          this.currentEvent = data;
          // console.log(data)
        },
        error => {
          console.log(error);
        }
    )
  }

  updateEvent(): void {
    this.eventService.updateEvent(this.currentEvent.id, this.currentEvent)
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
    this.favouriteService.addFav(this.currentEvent.id, "events")
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }



}
