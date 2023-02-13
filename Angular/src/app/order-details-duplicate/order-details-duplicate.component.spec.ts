import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDuplicateComponent } from './order-details-duplicate.component';

describe('OrderDetailsDuplicateComponent', () => {
  let component: OrderDetailsDuplicateComponent;
  let fixture: ComponentFixture<OrderDetailsDuplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsDuplicateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
