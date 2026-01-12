import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormUserComponent } from './reactive-form-user.component';

describe('ReactiveFormUserComponent', () => {
  let component: ReactiveFormUserComponent;
  let fixture: ComponentFixture<ReactiveFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
