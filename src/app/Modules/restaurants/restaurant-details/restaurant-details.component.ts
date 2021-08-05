import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SingleResDetail } from 'src/app/models/single-res-detail';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  id!: string | null;
  restaurantDetails!: SingleResDetail;
  menuDetail!: string[];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    //Retrieving restaurantId from the url
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      this.getSingleResDetails(this.id);
    });
  }

  // Fetching restaurant details
  getSingleResDetails(id: string | null) {
    const token = '34303304-5475-4d63-9352-0d24ed631b37';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': 'Bearer' + token
      })
    };
    const url = `https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/${id}`;
    this.http.get(url, httpOptions).subscribe((res: any) => {
      this.restaurantDetails = res['restaurantDetail'];
    });
  }

  // Fetching menuitems. API response is not getting
  public getResMenu() {
    const token = '34303304-5475-4d63-9352-0d24ed631b37';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': 'Bearer' + token
      })
    };
    const url = `https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu`;
    this.http.get(url, httpOptions).subscribe((res: any) => {
      
    });
  }
}
