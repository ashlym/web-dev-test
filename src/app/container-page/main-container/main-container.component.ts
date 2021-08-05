import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '34303304-5475-4d63-9352-0d24ed631b37');
  }

}
