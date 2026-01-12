import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormPersonComponent } from './template-form-person.component';

describe('TemplateFormPersonComponent', () => {
  let component: TemplateFormPersonComponent;
  let fixture: ComponentFixture<TemplateFormPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
