import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AllRestaurantData } from 'src/app/models/all-restaurant-data';

@Component({
  selector: 'app-restaurant-main',
  templateUrl: './restaurant-main.component.html',
  styleUrls: ['./restaurant-main.component.css']
})
export class RestaurantMainComponent implements OnInit {
  restaurantDetails: AllRestaurantData[] = [];
  restaurantCuisineList!: string[];

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  // Fetching all restaurant details
  public getAllRestaurants() {
    const token = '34303304-5475-4d63-9352-0d24ed631b37';
    this.restaurantDetails = [];
    this.restaurantCuisineList = [];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
         Accept: 'application/json',
         'Authorization': 'Bearer' + token
      }),
    };
    const url = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants';
    this.http.get(url, httpOptions).subscribe((res: any) => {
      this.restaurantDetails = res['allRestaurants'];
      this.getRestaurantCuisines(this.restaurantDetails);
    });
  }

  // Fetching restaurant cuisine details to show in filter modal
  public getRestaurantCuisines(data: AllRestaurantData[]) {
    let tempList: string[] = [];
    let cuisine: string[] = [];
    data.forEach(element => {
      if (element.restaurantCuisine) {
        cuisine.push(JSON.parse(element.restaurantCuisine));
      }
    });
    cuisine.forEach(single => {
      tempList.push(single);
    });
    for (let i = 0; i < tempList.length; i++) {
      for (let j = 0; j < tempList[i].length; j++) {
        if (!(this.restaurantCuisineList.includes(tempList[i][j]))) {
          this.restaurantCuisineList.push(tempList[i][j]);
        }
      }
    }
  }
  
  // Tracking single restaurant data using Id
  identify(index: number, item: AllRestaurantData) {
    return item.id;
  }

}
