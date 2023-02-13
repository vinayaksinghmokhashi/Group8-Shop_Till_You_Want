import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckForgotPasswordOtpComponent } from './check-forgot-password-otp.component';

describe('CheckForgotPasswordOtpComponent', () => {
  let component: CheckForgotPasswordOtpComponent;
  let fixture: ComponentFixture<CheckForgotPasswordOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckForgotPasswordOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckForgotPasswordOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
