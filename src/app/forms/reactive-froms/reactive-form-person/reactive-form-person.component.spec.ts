import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPersonComponent } from './reactive-form-person.component';

describe('ReactiveFormPersonComponent', () => {
  let component: ReactiveFormPersonComponent;
  let fixture: ComponentFixture<ReactiveFormPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
