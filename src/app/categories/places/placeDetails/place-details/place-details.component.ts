import { Component, OnInit } from '@angular/core';
import { IPlace } from '../../../../_models/place';
import { IApiData } from '../../../../_models/apidata';
import { PlaceService } from '../../../../_services/place.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  public placeId: string;
  currentPlace = null;
  message = '';

  constructor(
    private placeService: PlaceService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.subscribeToPlace(this.activatedRoute.snapshot.paramMap.get('id'));
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

}
