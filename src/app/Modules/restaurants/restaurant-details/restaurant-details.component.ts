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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
    const url = `https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/${id}`;
    this.http.get(url, httpOptions).subscribe((res: any) => {
      this.restaurantDetails = res['restaurantDetail'];
    });
  }
}
