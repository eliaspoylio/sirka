import { NgModule } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './user-login/login/login.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './user-login/register/register.component';
import { ResetPasswordComponent } from './user-login/reset-password/reset-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WeatherComponent } from './weather/weather.component';
import { EventsComponent } from './events/events.component';
import { PlacesComponent } from './places/places.component';
import { ActivitiesComponent } from './activities/activities.component';


const routes: Routes = [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'items', component: ItemsComponent },
  {path: 'favourites', component: FavouritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'event', component: EventsComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'activities', component: ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ FrontpageComponent, ItemsComponent, FavouritesComponent, LoginComponent, MapComponent, UserInfoComponent ]
