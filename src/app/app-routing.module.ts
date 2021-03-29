import { NgModule } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UserInfoComponent } from './user-info/user-info.component';


const routes: Routes = [
  {path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  {path: 'frontpage', component: FrontpageComponent},
  {path: 'items', component: ItemsComponent },
  {path: 'favourites', component: FavouritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'searchbar', component: SearchbarComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ FrontpageComponent, ItemsComponent, FavouritesComponent, LoginComponent, MapComponent, SearchbarComponent, UserInfoComponent ]
