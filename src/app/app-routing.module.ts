import { NgModule } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './user-login/login/login.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './user-login/register/register.component';
import { ResetPasswordComponent } from './user-login/reset-password/reset-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WeatherComponent } from './weather/weather.component';
import { EventsComponent } from './categories/events/events.component';
import { PlacesComponent } from './categories/places/places.component';
import { ActivitiesComponent } from './categories/activities/activities.component';
import { ActivityDetailsComponent } from './categories/activities/activityDetails/activity-details/activity-details.component';
import { EventDetailsComponent } from './categories/events/eventDetails/event-details/event-details.component';
import { PlaceDetailsComponent } from './categories/places/placeDetails/place-details/place-details.component'


const routes: Routes = [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'categories', component: CategoriesComponent },
  {path: 'favourites', component: FavouritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'categories/events', component: EventsComponent},
  {path: 'categories/places', component: PlacesComponent},
  {path: 'categories/activities', component: ActivitiesComponent},
  {path: 'categories/events/event-details', component: EventDetailsComponent},
  {path: 'categories/places/place-details', component: PlaceDetailsComponent},
  {path: 'categories/activities/activity-details', component: ActivityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ FrontpageComponent, CategoriesComponent, FavouritesComponent, LoginComponent, MapComponent, UserInfoComponent ]
