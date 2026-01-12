import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDemoUserComponent } from './rest-demo-user.component';

describe('RestDemoUserComponent', () => {
  let component: RestDemoUserComponent;
  let fixture: ComponentFixture<RestDemoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestDemoUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestDemoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
