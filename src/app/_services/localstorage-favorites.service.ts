import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageFavoritesService {

constructor() {
let fav = this.getFavorite()
}

public getFavorite() {
  let localStorageItem = JSON.parse(localStorage.getItem('FAVLIST'));
  return localStorageItem;
}

}
