import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../../../_models/event';
import { IApiData } from '../../../../_models/apidata';
import { Subscription } from 'rxjs';
import { EventService } from '../../../../_services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
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

}
