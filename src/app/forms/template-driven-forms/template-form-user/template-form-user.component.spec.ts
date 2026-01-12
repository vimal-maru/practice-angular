import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormUserComponent } from './template-form-user.component';

describe('TemplateFormUserComponent', () => {
  let component: TemplateFormUserComponent;
  let fixture: ComponentFixture<TemplateFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
