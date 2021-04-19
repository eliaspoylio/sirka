import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './user-login/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './user-login/register/register.component';
import { ResetPasswordComponent } from './user-login/reset-password/reset-password.component';
import { EventsComponent } from './categories/events/events.component';
import { PlacesComponent } from './categories/places/places.component';
import { ActivitiesComponent } from './categories/activities/activities.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    NavbarComponent,
    FavouritesComponent,
    CategoriesComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_API_KEY',
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
