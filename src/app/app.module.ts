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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripPipe } from '../app/_pipes/strip.pipe';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake_backend';
import { ENV } from '../../env-var';
import { ActivityDetailsComponent } from './categories/activities/activityDetails/activity-details/activity-details.component';
import { EventDetailsComponent } from './categories/events/eventDetails/event-details/event-details.component';
import { PlaceDetailsComponent } from './categories/places/placeDetails/place-details/place-details.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

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
    ActivitiesComponent,
    StripPipe,
    ActivityDetailsComponent,
    EventDetailsComponent,
    PlaceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxHideOnScrollModule,
    AgmCoreModule.forRoot({
      apiKey: ENV.GOOGLEMAPS_API_KEY,
    }),
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
