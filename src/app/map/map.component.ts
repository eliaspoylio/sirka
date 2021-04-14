import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 60.192059;
  lng = 24.945831;

  constructor() { }

  ngOnInit(): void {
  }

}
