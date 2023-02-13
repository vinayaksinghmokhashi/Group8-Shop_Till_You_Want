import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrdersComponent } from './rent-orders.component';

describe('RentOrdersComponent', () => {
  let component: RentOrdersComponent;
  let fixture: ComponentFixture<RentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
