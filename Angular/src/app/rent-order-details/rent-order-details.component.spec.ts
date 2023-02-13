import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrderDetailsComponent } from './rent-order-details.component';

describe('RentOrderDetailsComponent', () => {
  let component: RentOrderDetailsComponent;
  let fixture: ComponentFixture<RentOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
