import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDemoProductComponent } from './rest-demo-product.component';

describe('RestDemoProductComponent', () => {
  let component: RestDemoProductComponent;
  let fixture: ComponentFixture<RestDemoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestDemoProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestDemoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
