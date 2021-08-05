import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.css']
})
export class RestaurantHeaderComponent implements OnInit, OnChanges {
  hideItems = false;
  @Input()cuisineItems!: any[];
  finalList: string[] = [];
  ngModalRef!: NgbModalRef;
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      if (res.get('id')) {
        this.hideItems = true;
      }
    });
  }

  ngOnChanges() {
  }

  // Invoke while filter click from header
  public open(content: any) {
    this.ngModalRef = this.modalService.open(content, { windowClass: 'modal right fade main-modal' });
  }
}
