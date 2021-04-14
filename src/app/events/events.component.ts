import { Component, OnInit } from '@angular/core';
import { IEvent } from '../_models/event';
import { IApiData } from '../_models/apidata';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { EventService } from '../_services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventSubscription: Subscription;
  events: IEvent[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.getEvents().subscribe((data) => {
      let eventData = data as IApiData;

      eventData.data.forEach(element => {
        this.events.push(element);
      });
      this.events.forEach(element => {

      });
    }, error => {
      console.log(error);
    });
  }

};
