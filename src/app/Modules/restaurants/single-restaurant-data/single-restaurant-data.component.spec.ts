import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRestaurantDataComponent } from './single-restaurant-data.component';

describe('SingleRestaurantDataComponent', () => {
  let component: SingleRestaurantDataComponent;
  let fixture: ComponentFixture<SingleRestaurantDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRestaurantDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRestaurantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
