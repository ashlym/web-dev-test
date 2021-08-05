import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantMainComponent } from './restaurant-main/restaurant-main.component';
import { SingleRestaurantDataComponent } from './single-restaurant-data/single-restaurant-data.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantHeaderComponent } from './restaurant-header/restaurant-header.component';


@NgModule({
  declarations: [
    RestaurantMainComponent,
    SingleRestaurantDataComponent,
    RestaurantDetailsComponent,
    RestaurantHeaderComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    HttpClientModule
  ]
})
export class RestaurantsModule { }
