import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './user-login/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ItemsComponent } from './items/items.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './user-login/register/register.component';
import { ResetPasswordComponent } from './user-login/reset-password/reset-password.component';
import { EventsComponent } from './events/events.component';
import { PlacesComponent } from './places/places.component';
import { ActivitiesComponent } from './activities/activities.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    NavbarComponent,
    FavouritesComponent,
    ItemsComponent,
    UserInfoComponent,
    FrontpageComponent,
    FooterComponent,
    WeatherComponent,
    RegisterComponent,
    ResetPasswordComponent,
    EventsComponent,
    PlacesComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
