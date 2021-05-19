import { Component, OnInit } from '@angular/core';
import { LocalstorageFavoritesService } from '../_services/localstorage-favorites.service';
import { StripPipe } from '../_pipes/strip.pipe';

@Component({
  selector: 'app-localstorage-favorites',
  templateUrl: './localstorage-favorites.component.html',
  styleUrls: ['./localstorage-favorites.component.css']
})
export class LocalstorageFavoritesComponent implements OnInit {

  public data;
  constructor(private favLocalStorage: LocalstorageFavoritesService) { }

  ngOnInit(): void {
    this.data = this.favLocalStorage.getFavorite();
  }

}
