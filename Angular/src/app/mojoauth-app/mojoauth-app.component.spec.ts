import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojoauthAppComponent } from './mojoauth-app.component';

describe('MojoauthAppComponent', () => {
  let component: MojoauthAppComponent;
  let fixture: ComponentFixture<MojoauthAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojoauthAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojoauthAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
