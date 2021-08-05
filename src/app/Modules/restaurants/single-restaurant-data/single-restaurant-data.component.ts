import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AllRestaurantData } from 'src/app/models/all-restaurant-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-restaurant-data',
  templateUrl: './single-restaurant-data.component.html',
  styleUrls: ['./single-restaurant-data.component.css']
})
export class SingleRestaurantDataComponent implements OnInit {
 @Input()singleResData!: AllRestaurantData;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
