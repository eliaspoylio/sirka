import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Favourite } from '../_models/favourite';

@Injectable({ providedIn: 'root' })
export class FavouriteService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private facouriteSubject: BehaviorSubject<Favourite>;
    public favourite: Observable<Favourite>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public addFav(favId, category): Observable<any> {
        return this.http.post<Favourite>(`${environment.apiUrl}/fav/fav`, { favId , category });
    }

    public getFavourites(): Observable<any> {
        return this.http.get<Favourite>(`${environment.apiUrl}/fav/favourites`);
    }

}