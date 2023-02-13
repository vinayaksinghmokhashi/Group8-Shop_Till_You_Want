import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurnishingProductsComponent } from './home-furnishing-products.component';

describe('HomeFurnishingProductsComponent', () => {
  let component: HomeFurnishingProductsComponent;
  let fixture: ComponentFixture<HomeFurnishingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFurnishingProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFurnishingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
